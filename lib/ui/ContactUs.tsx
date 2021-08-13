import { Box, IconButton, BoxProps, useClipboard } from "@chakra-ui/react";
import {
  Phone,
  ClipboardNotes,
  EnvelopeEdit,
  User,
  Envelope,
  CommentLines,
} from "lib/svg/unicons";
import Link from "next/link";

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

  return (
    <Box
      as="div"
      w="37.5em"
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
      <Link
        href={
          props.type === "phone"
            ? `tel:${props.contactInfo}`
            : `mailto:${props.contactInfo}`
        }
        passHref
      >
        <IconButton
          size="md"
          variant="solid"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          _active={{ bg: "gray.300" }}
          icon={
            <props.leftButton.icon color="gray.700" h="1.25em" w="1.25em" />
          }
          aria-label={props.leftButton.ariaLabel}
        />
      </Link>
      <Box
        as="div"
        bg="gray.100"
        borderRadius="0.375em"
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <Box as="p" fontWeight="800" fontSize="1.25em" lineHeight="1.4em">
          {props.contactInfo}
        </Box>
      </Box>
      <IconButton
        size="md"
        variant="solid"
        bg="gray.100"
        _hover={{ bg: "gray.200" }}
        _active={{ bg: "gray.300" }}
        icon={<props.rightButton.icon color="gray.700" h="1.25em" w="1.25em" />}
        aria-label={props.rightButton.ariaLabel}
        onClick={onCopy}
      />
    </Box>
  );
};

// ContactUs
export interface ContactUsPropsI extends BoxProps {}

export const ContactUs = (props: ContactUsPropsI) => (
  <Box
    as="section"
    px={{ base: "0.625em", lg: "1em" }}
    py="9.375em"
    display="grid"
    justifyContent="center"
    alignContent="center"
    gridRowGap="3.125em"
    id="contact"
    {...props}
  >
    {/* Contact Us Intro */}
    <Box as="div" display="grid" gridRowGap="1em" maxW="37.5em">
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
    <Box as="div" display="grid" gridRowGap="1.5625em">
      {/* QuickContacts */}
      <Box as="div" display="grid" gridRowGap="0.625em">
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
    </Box>
  </Box>
);
