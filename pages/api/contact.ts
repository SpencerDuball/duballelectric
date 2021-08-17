// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import axios from "axios";
import url from "url";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// AWS Simple Email Service
//////////////////////////////////////////////////////////////////////////////////////
const client = new SESClient({
  // this will not be null, we check for this in the handler
  region: process.env.DUBALL_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.DUBALL_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.DUBALL_AWS_SECRET_ACCESS_KEY!,
  },
});

// constants
const FROM_EMAIL = "spencerduball@gmail.com";
const TO_EMAIL = "spencer@jeepfenderextender.com";
async function sendEmail(formData: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  return client.send(
    new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: { ToAddresses: [TO_EMAIL] },
      Message: {
        Subject: { Data: `New Inquiry | ${formData.name}` },
        Body: {
          Text: {
            Data:
              `Name: ${formData.name}\n` +
              `Phone: ${formData.phone}\n` +
              `Email: ${formData.email}\n` +
              `Message:\n` +
              formData.message,
          },
          Html: {
            Data:
              `<h2>Name:</h2><p>${formData.name}</p><br/>` +
              `<h2>Phone:</h2><p>${formData.phone}</p><br/>` +
              `<h2>Email:</h2><p>${formData.email}</p><br/>` +
              `<h2>Message:</h2><p>${formData.message}</p><br/>`,
          },
        },
      },
    })
  );
}

// /api/contact
//////////////////////////////////////////////////////////////////////////////////////

// define interfaces
interface HCaptchaResponse {
  success: boolean;
  "error-codes": string[];
}

// define constants
const HCAPTCHA_SITEVERIFY_URL = "https://hcaptcha.com/siteverify";

const schema = Yup.object().shape({
  name: Yup.string().required().min(2),
  phone: Yup.string()
    .required()
    .min(10)
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}\s*$/),
  email: Yup.string().required().email(),
  message: Yup.string().required().min(20),
  token: Yup.string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if the required environment variables are not included, throw error
  // and suggest to send an email directly
  const environmentVariables = [
    "DUBALL_AWS_REGION",
    "DUBALL_AWS_ACCESS_KEY_ID",
    "DUBALL_AWS_SECRET_ACCESS_KEY",
    "HCAPTCHA_SECRET",
    "NEXT_PUBLIC_HCAPTCHA_SITEKEY",
  ];
  if (
    !environmentVariables.every((value) => (process.env[value] ? true : false))
  ) {
    console.error(
      "There was an issue with your environment variables" +
        ", please re-pull the environment variables and try again."
    );
    res.statusMessage =
      "Oops! There was an error on our end, please send " +
      "us an email directly at tammy@duballelectric.com.";
    res.status(500).json({});
    return;
  }

  if (req.body.formData) {
    // process valid formData input
    if (await schema.isValid(req.body.formData)) {
      // check the hCaptcha token for validity
      const params = new url.URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET,
        response: req.body.formData.token,
        sitekey: process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY,
      });
      const hCaptchaResponse = await axios
        .post<HCaptchaResponse>(HCAPTCHA_SITEVERIFY_URL, params.toString())
        .catch((e) => console.log(e));

      // respond with success or failure
      if (hCaptchaResponse && hCaptchaResponse.data.success) {
        try {
          await sendEmail(req.body.formData);
          res.status(200).json({});
        } catch (e) {
          console.error(e);
          res.statusMessage =
            "Oops! There was an error on our end, please send " +
            "us an email directly at tammy@duballelectric.com.";
          res.status(500).json({});
        }
      } else {
        res.statusMessage = "The hCaptcha failed, begone bot!";
        res.status(400).json({});
      }
    }

    // handle incorrect formData input
    else {
      res.statusMessage =
        "It looks like the form was submitted with invalid " +
        "data, please try again with valid inputs.";
      res.status(400).json({});
    }
  } else {
    // send this is formData was not supplied
    res.statusMessage =
      "It looks like the form was submitted without data, " +
      "please try again with valid inputs.";
    res.status(400).json({});
  }
}
