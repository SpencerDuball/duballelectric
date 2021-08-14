import { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  BoxProps,
  useClipboard,
  useBreakpointValue,
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

interface InputWithIconsPropsI extends BoxProps {
  leftIcon: (props: BoxProps) => JSX.Element;
  rightIcon: (props: BoxProps) => JSX.Element;
  inputProps?: BoxProps;
}

const InputWithIcons = (props: InputWithIconsPropsI) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const iconSize = useBreakpointValue({ base: "17.5px", md: "20px" });
  const iconPadding = useBreakpointValue({ base: "32px", md: "40px" });

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
        filterOut: ["leftIcon", "rightIcon", "inputProps"],
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
        {...props.inputProps}
      />
      <Tooltip
        label="Input invalid"
        aria-label="Invalid input"
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
    </Box>
  );
};

// ContactForm
interface ContactFormPropsI extends BoxProps {}

const ContactForm = (props: ContactFormPropsI) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: (value) => {
      alert(JSON.stringify(value, null, 2));
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
      {...props}
    >
      <InputWithIcons
        leftIcon={User}
        rightIcon={ExclamationTriangle}
        inputProps={{ placeholder: "Name" }}
      />
      <InputWithIcons
        leftIcon={Phone}
        rightIcon={ExclamationTriangle}
        inputProps={{ placeholder: "Phone" }}
      />
      <InputWithIcons
        leftIcon={Envelope}
        rightIcon={ExclamationTriangle}
        inputProps={{ placeholder: "Email" }}
      />
    </Box>
  );
};

// QuickContact
interface QuickContact extends BoxProps {
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

const QuickContact = (props: QuickContact) => {
  const { hasCopied, onCopy } = useClipboard(props.contactInfo);
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
    fontSize={{ base: "0.6em", sm: "0.70em", "2xl": "0.85em", "3xl": "1em" }}
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
