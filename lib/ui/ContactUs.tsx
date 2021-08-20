import { useState, useRef } from "react";
import {
  Box,
  Button,
  InputProps,
  TextareaProps,
  IconButton,
  Tooltip,
  BoxProps,
  useClipboard,
  useBreakpointValue,
  useToken,
  useToast,
} from "@chakra-ui/react";
import {
  Phone,
  ClipboardNotes,
  EnvelopeEdit,
  User,
  Envelope,
  CommentLines,
  ExclamationTriangle,
} from "lib/svg/unicons";
import { filterProps } from "utility";
import { useFormik } from "formik";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";

// TextareaWithIcons
interface TextareaWithIconsPropsI extends BoxProps {
  leftIcon: (props: BoxProps) => JSX.Element;
  rightIcon: (props: BoxProps) => JSX.Element;
  textareaProps?: TextareaProps;
  isError: boolean;
  errorMessage?: string;
}

const TextareaWithIcons = (props: TextareaWithIconsPropsI) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const iconSize = useBreakpointValue({ base: "17.5px", md: "20px" });
  const iconPadding = useBreakpointValue({ base: "32px", md: "40px" });
  const [gray100] = useToken("colors", ["gray.100"]);

  return (
    <Box
      as="div"
      display="grid"
      gridAutoFlow="column"
      gridTemplateColumns="max-content 1fr max-content"
      bg="gray.100"
      px="0.5em"
      borderRadius="0.375em"
      gridColumnGap="1em"
      {...filterProps({
        props,
        filterOut: [
          "leftIcon",
          "rightIcon",
          "textareaProps",
          "isError",
          "errorMessage",
        ],
      })}
    >
      <Box
        as="div"
        h={iconPadding}
        w={iconPadding}
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <props.leftIcon w={iconSize} h={iconSize} fill="gray.700" />
      </Box>
      <Box
        as="textarea"
        resize="none"
        outline="none"
        bg="gray.100"
        color="gray.700"
        fontSize="16px"
        py={`calc((${iconPadding} - ${iconSize}) / 2)`}
        boxShadow={`0 0 0 30px ${gray100} inset`}
        sx={{
          WebkitBoxShadow: `0 0 0 30px ${gray100} inset !important`,
        }}
        {...filterProps({
          props: props.textareaProps ? props.textareaProps! : {},
          filterOut: ["onCopy"],
        })}
      />
      {props.isError ? (
        <Tooltip
          label={props.errorMessage}
          aria-label="Invalid input message"
          hasArrow
          placement="top-end"
          isOpen={isTooltipOpen}
        >
          <Box
            as="div"
            h={iconPadding}
            w={iconPadding}
            display="grid"
            justifyContent="center"
            alignContent="center"
            onMouseLeave={() => setIsTooltipOpen(false)}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          >
            <props.rightIcon w={iconSize} h={iconSize} fill="red.500" />
          </Box>
        </Tooltip>
      ) : (
        <Box as="div" h={iconPadding} w={iconPadding} />
      )}
    </Box>
  );
};

// InputWithIcons
interface InputWithIconsPropsI extends BoxProps {
  leftIcon: (props: BoxProps) => JSX.Element;
  rightIcon: (props: BoxProps) => JSX.Element;
  inputProps?: InputProps;
  isError: boolean;
  errorMessage?: string;
}

const InputWithIcons = (props: InputWithIconsPropsI) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const iconSize = useBreakpointValue({ base: "17.5px", md: "20px" });
  const iconPadding = useBreakpointValue({ base: "32px", md: "40px" });
  const [gray100] = useToken("colors", ["gray.100"]);

  return (
    <Box
      as="div"
      display="grid"
      gridAutoFlow="column"
      gridTemplateColumns="max-content 1fr max-content"
      bg="gray.100"
      px="0.5em"
      borderRadius="0.375em"
      gridColumnGap="1em"
      {...filterProps({
        props,
        filterOut: [
          "leftIcon",
          "rightIcon",
          "inputProps",
          "isError",
          "errorMessage",
        ],
      })}
    >
      <Box
        as="div"
        h={iconPadding}
        w={iconPadding}
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <props.leftIcon w={iconSize} h={iconSize} fill="gray.700" />
      </Box>
      <Box
        as="input"
        type="text"
        outline="none"
        bg="gray.100"
        color="gray.700"
        fontSize="16px"
        boxShadow={`0 0 0 30px ${gray100} inset`}
        sx={{
          WebkitBoxShadow: `0 0 0 30px ${gray100} inset !important`,
        }}
        {...props.inputProps}
      />
      {props.isError ? (
        <Tooltip
          label={props.errorMessage}
          aria-label="Invalid input message"
          hasArrow
          placement="top-end"
          isOpen={isTooltipOpen}
        >
          <Box
            as="div"
            h={iconPadding}
            w={iconPadding}
            display="grid"
            justifyContent="center"
            alignContent="center"
            onMouseLeave={() => setIsTooltipOpen(false)}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          >
            <props.rightIcon w={iconSize} h={iconSize} fill="red.500" />
          </Box>
        </Tooltip>
      ) : (
        <Box as="div" h={iconPadding} w={iconPadding} />
      )}
    </Box>
  );
};

// ContactForm
interface ContactFormPropsI extends BoxProps {}

const ContactForm = (props: ContactFormPropsI) => {
  const buttonSize = useBreakpointValue({ base: "md", "2xl": "lg" });
  const captchaRef = useRef<HCaptcha>(null!);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      token: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Required")
        .min(2, "Please provide full name"),
      phone: Yup.string()
        .required("Required")
        .min(10, "Please provide a valid phone number")
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}\s*$/,
          "Please provide a valid phone number"
        ),
      email: Yup.string()
        .required("Required")
        .email("Please provide a valid email"),
      message: Yup.string()
        .required("Required")
        .min(20, "Tell us more about your project."),
      token: Yup.string().required(),
    }),
    onSubmit: async (value) => {
      try {
        const response = await axios.post("/api/contact", { formData: value });

        if (response.status === 200) {
          // reset the form
          formik.resetForm();
          captchaRef.current && captchaRef.current.resetCaptcha();

          // send a success notification
          toast({
            title: "Successfully submitted",
            description:
              "We have received your message " + "and will be in contact soon.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "bottom-right",
          });
        } else {
          // display error notification
          toast({
            title: "Error",
            description: response.statusText,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "bottom-right",
          });
          console.error(response);
        }
      } catch (e) {
        // display error notification
        toast({
          title: "Oops!",
          description:
            "It looks like there was an error on our end, " +
            "please send us an email directly at: tammy@duballelectric.com.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
        console.error(e);
      }
    },
  });

  return (
    <Box
      as="form"
      p="0.75em"
      w={{ base: "100%", lg: "35em" }}
      borderWidth="0.0625em"
      borderColor="gray.100"
      boxShadow="lg"
      borderRadius="0.375em"
      display="grid"
      gridRowGap="0.75em"
      {...filterProps({ props, filterOut: ["siteKey"] })}
    >
      <InputWithIcons
        leftIcon={User}
        rightIcon={ExclamationTriangle}
        inputProps={{
          placeholder: "Name",
          autoComplete: "name",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.name,
          name: "name",
          id: "name",
        }}
        isError={formik.touched.name && formik.errors.name ? true : false}
        errorMessage={formik.errors.name}
      />
      <InputWithIcons
        leftIcon={Phone}
        rightIcon={ExclamationTriangle}
        inputProps={{
          placeholder: "Phone",
          autoComplete: "tel",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.phone,
          type: "tel",
          name: "phone",
          id: "phone",
        }}
        isError={formik.touched.phone && formik.errors.phone ? true : false}
        errorMessage={formik.errors.phone}
      />
      <InputWithIcons
        leftIcon={Envelope}
        rightIcon={ExclamationTriangle}
        inputProps={{
          placeholder: "Email",
          autoComplete: "email",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.email,
          type: "email",
          name: "email",
          id: "email",
        }}
        isError={formik.touched.email && formik.errors.email ? true : false}
        errorMessage={formik.errors.email}
      />
      <TextareaWithIcons
        leftIcon={CommentLines}
        rightIcon={ExclamationTriangle}
        textareaProps={{
          placeholder:
            "Tell us about your project... \n\nI am remodeling my kitchen and would " +
            "like to add some more outlets and additional ceiling lighting. " +
            "I would be interested to talk more about my project.",
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          value: formik.values.message,
          name: "message",
          id: "message",
          rows: 10,
        }}
        isError={formik.touched.message && formik.errors.message ? true : false}
        errorMessage={formik.errors.message}
      />
      <Box as="div" w="max-content" justifySelf="center">
        <HCaptcha
          // Note: If environment variables are not loaded this will throw an error.
          // This is what we want. If there are no .env variables, then we want this to
          // fail at build time.
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!}
          reCaptchaCompat={false}
          onError={(e) => {
            console.log(`hCaptcha Error: ${e}`);
            formik.setValues({ ...formik.values, token: "" });
            captchaRef.current && captchaRef.current.resetCaptcha();
          }}
          onExpire={() => {
            console.log(`hCaptcha Token Expired`);
            formik.setValues({ ...formik.values, token: "" });
            captchaRef.current && captchaRef.current.resetCaptcha();
          }}
          onVerify={(token: string) =>
            formik.setValues({ ...formik.values, token })
          }
          ref={captchaRef}
        />
      </Box>
      <Button
        type="submit"
        size={buttonSize}
        variant="solid"
        bg="gray.500"
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.700" }}
        color="white"
        w="max-content"
        justifySelf="center"
        onClick={(e: any) => formik.handleSubmit(e)}
      >
        Submit
      </Button>
    </Box>
  );
};

// QuickContact
interface QuickContactPropsI extends BoxProps {
  leftButton: {
    icon: (props: BoxProps) => JSX.Element;
    ariaLabel: string;
  };
  rightButton: {
    icon: (props: BoxProps) => JSX.Element;
    ariaLabel: string;
  };
  contactInfo: string;
  type: "phone" | "email";
}

const QuickContact = (props: QuickContactPropsI) => {
  const { onCopy } = useClipboard(props.contactInfo);
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box
      as="div"
      w={{ base: "100%", lg: "35em" }}
      p="0.75em"
      borderWidth="0.0625em"
      borderColor="gray.100"
      boxShadow="lg"
      borderRadius="0.375em"
      display="grid"
      gridAutoFlow="column"
      gridColumnGap="0.75em"
      gridTemplateColumns="max-content 1fr max-content"
    >
      <Tooltip
        label={props.type === "phone" ? "Start call" : "Open email"}
        aria-label={
          props.type === "phone" ? "Start call tooltip" : "Open email tooltip"
        }
        hasArrow
        placement="top-start"
      >
        <IconButton
          size={buttonSize}
          variant="solid"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
          icon={
            <props.leftButton.icon color="gray.700" h="1.25em" w="1.25em" />
          }
          aria-label={props.leftButton.ariaLabel}
          onClick={() =>
            (location.href = `${
              props.type === "phone"
                ? `tel:${props.contactInfo}`
                : `mailto:${props.contactInfo}`
            }`)
          }
        />
      </Tooltip>
      <Box
        as="div"
        bg="gray.100"
        borderRadius="0.375em"
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <Box as="p" fontWeight="800" lineHeight="1.4em" fontSize="1.25em">
          {props.contactInfo}
        </Box>
      </Box>
      <Tooltip
        label="Copy to clipboard"
        aria-label="Copy to clipboard tooltip"
        hasArrow
        placement="top-end"
      >
        <IconButton
          size={buttonSize}
          variant="solid"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
          icon={
            <props.rightButton.icon color="gray.700" h="1.25em" w="1.25em" />
          }
          aria-label={props.rightButton.ariaLabel}
          onClick={onCopy}
        />
      </Tooltip>
    </Box>
  );
};

// ContactUs
export interface ContactUsPropsI extends BoxProps {}

export const ContactUs = (props: ContactUsPropsI) => (
  <Box
    as="section"
    px={{ base: "0.625em", lg: "1em" }}
    fontSize={{ base: "0.6em", sm: "0.70em", lg: "1em" }}
    py="9.375em"
    display="grid"
    justifyItems="center"
    gridAutoColumns="100%"
    alignContent="center"
    gridRowGap="3.125em"
    id="contact"
    {...props}
  >
    {/* Contact Us Intro */}
    <Box as="div" display="grid" gridRowGap="1em" maxW="35em">
      <Box
        as="h1"
        fontWeight="800"
        fontSize="3em"
        lineHeight="1.666em"
        color="gray.700"
        textAlign="center"
      >
        Contact Us
      </Box>
      <Box
        as="p"
        fontSize="1em"
        lineHeight="1.5em"
        color="gray.600"
        textAlign="center"
      >
        Have a project in mind? We would like to help! Give us a call, send us
        an email, or fill out the form below and we will be sure to get in
        touch.
      </Box>
    </Box>
    <Box
      as="div"
      display="grid"
      justifySelf="center"
      gridRowGap="1.5625em"
      w={{ base: "100%", sm: "90%", lg: "100%" }}
    >
      {/* QuickContacts */}
      <Box as="div" display="grid" gridRowGap="0.625em" justifyItems="center">
        <QuickContact
          leftButton={{ icon: Phone, ariaLabel: "Call" }}
          rightButton={{ icon: ClipboardNotes, ariaLabel: "Copy to clipboard" }}
          contactInfo="(319) 393-1393"
          type="phone"
        />
        <QuickContact
          leftButton={{ icon: EnvelopeEdit, ariaLabel: "Send email" }}
          rightButton={{ icon: ClipboardNotes, ariaLabel: "Copy to clipboard" }}
          contactInfo="tammy@duballelectric.com"
          type="email"
        />
      </Box>
      {/* seperator */}
      <Box
        as="p"
        fontSize="1em"
        lineHeight="1.5em"
        color="gray.600"
        textAlign="center"
      >
        or
      </Box>
      {/* Contact Form */}
      <ContactForm justifySelf="center" />
    </Box>
  </Box>
);
