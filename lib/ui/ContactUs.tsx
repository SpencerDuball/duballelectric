import { Box, BoxProps } from "@chakra-ui/react";

export interface ContactUsPropsI extends BoxProps {}

export const ContactUs = (props: ContactUsPropsI) => (
  <Box
    as="section"
    px={{ base: "0.625em", lg: "1em" }}
    py="9.375em"
    display="grid"
    {...props}
  ></Box>
);
