// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import axios from "axios";
import url from "url";

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
      console.log(hCaptchaResponse);

      // respond with success or failure
      if (hCaptchaResponse && hCaptchaResponse.data.success) {
        res.status(200).json({});
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
