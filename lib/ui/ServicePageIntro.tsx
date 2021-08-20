import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { DefaultHeaderHeight } from "./Header";

// ServicePageIntroIcon
export interface ServicePageIntroIconPropsI extends BoxProps {
  icon: React.ReactElement;
}

export const ServicePageIntroIcon = (props: ServicePageIntroIconPropsI) =>
  React.cloneElement(props.icon, { h: "25em", w: "25em", fill: "gray.700" });

// ServicePageIntroTitle
export interface ServicePageIntroTitlePropsI extends BoxProps {}

export const ServicePageIntroTitle = (props: ServicePageIntroTitlePropsI) => (
  <Box
    as="h1"
    fontWeight="800"
    fontSize="3em"
    lineHeight="1.667em"
    color="gray.200"
    {...props}
  >
    {props.children}
  </Box>
);

// ServicePageIntroDescription
export interface ServicePageIntroDescriptionPropsI extends BoxProps {}

export const ServicePageIntroDescription = (
  props: ServicePageIntroDescriptionPropsI
) => (
  <Box as="p" fontSize="1em" lineHeight="1.5em" color="gray.200" {...props}>
    {props.children}
  </Box>
);

// ServicePageIntro
export interface ServicePageIntroPropsI extends BoxProps {}

export const ServicePageIntro = (props: ServicePageIntroPropsI) => (
  <Box
    as="section"
    py="6.25em"
    bg="gray.600"
    display="grid"
    justifyItems="center"
    px={{ base: "0.625em", lg: "1em" }}
    mt={DefaultHeaderHeight}
    {...props}
  >
    {/* Content */}
    <Box
      as="div"
      maxW="80em"
      w="100%"
      display="grid"
      gridAutoFlow="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      {/* Title & Description */}
      <Box
        as="div"
        display="grid"
        gridAutoRows="max-content"
        gridRowGap="1.875em"
        maxW="26.625em"
      >
        {React.Children.map(props.children, (child) => {
          if (child && typeof child === "object" && "type" in child) {
            // if non-JSX component (normal DOM component) type will be string
            // we will disregard non pass-listed components
            if (typeof child.type === "string") return null;

            // clone each child, pass any additional props needed
            switch (child.type.name) {
              case "ServicePageIntroTitle":
                return React.cloneElement(child);
              case "ServicePageIntroDescription":
                return React.cloneElement(child);
              default:
                return null;
            }
          } else return null;
        })}
      </Box>
      {React.Children.map(props.children, (child) => {
        if (child && typeof child === "object" && "type" in child) {
          // if non-JSX component (normal DOM component) type will be string
          // we will disregard non pass-listed components
          if (typeof child.type === "string") return null;

          // clone each child, pass any addional props needed
          switch (child.type.name) {
            case "ServicePageIntroIcon":
              return React.cloneElement(child);
            default:
              return null;
          }
        } else return null;
      })}
    </Box>
  </Box>
);
