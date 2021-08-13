import { Box, Button, BoxProps, useBreakpointValue } from "@chakra-ui/react";
import { FreeEstimates } from "lib/svg/duball";
import { filterProps } from "utility";
import { AngleRight } from "lib/svg/unicons";

// AboutUsCard
interface AboutUsCardPropsI extends BoxProps {
  cardTitle: string;
  cardDescription: string;
  buttonMessage: string;
}
const AboutUsCard = (props: AboutUsCardPropsI) => {
  return (
    <Box
      as="div"
      p="1.25em"
      display="grid"
      gridRowGap="1.25em"
      borderRadius="0.625em"
      justifyItems="center"
      bg="gray.50"
      w="max-content"
      boxShadow="lg"
      borderWidth="0.0625em"
      borderColor="gray.100"
      fontSize={{ base: "1.25em", md: "1.5em", xl: "1em" }}
      {...filterProps({
        props,
        filterOut: ["cardTitle", "cardDescription", "buttonMessage"],
      })}
    >
      {/* image */}
      <Box
        as="div"
        w="18.75em"
        h="12.75em"
        borderRadius="0.625em"
        bg="white"
      ></Box>
      {/* text */}
      <Box
        as="div"
        display="grid"
        gridRowGap="0.25em"
        gridAutoRows="max-content"
      >
        <Box
          as="h2"
          fontWeight="bold"
          fontSize="1.25em"
          lineHeight="1.4em"
          textAlign="center"
          color="gray.700"
        >
          {props.cardTitle}
        </Box>
        <Box
          as="p"
          fontSize="1em"
          lineHeight="1.5em"
          textAlign="center"
          color="gray.600"
          w="18.75em"
        >
          {props.cardDescription}
        </Box>
      </Box>
      <Button
        size="sm"
        colorScheme="gray"
        variant="solid"
        color="white"
        bg="gray.500"
        w="max-content"
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.700" }}
        rightIcon={<AngleRight fill="white" h="1em" w="1em" />}
      >
        {props.buttonMessage}
      </Button>
    </Box>
  );
};

// AboutUs
export interface AboutUsPropsI extends BoxProps {}

export const AboutUs = (props: AboutUsPropsI) => (
  <Box
    as="section"
    px={{ base: "0.625em", lg: "1em" }}
    py={{ base: "9.375em" }}
    display="grid"
    gridRowGap="6.25em"
    justifyContent="center"
    alignContent="center"
    fontSize={{ base: "0.6em", sm: "0.70em", "2xl": "0.85em", "3xl": "1em" }}
    {...props}
  >
    <Box
      as="div"
      display="grid"
      gridAutoFlow="column"
      gridColumnGap="5em"
      px={{ base: "1em", xl: "0" }}
    >
      {/* Text Content */}
      <Box as="div" display="grid" gridRowGap="1em">
        <Box
          as="div"
          display="grid"
          gridAutoFlow="column"
          gridAutoColumns="max-content"
          gridColumnGap="1em"
          justifyContent={{ base: "center", xl: "start" }}
          alignItems="center"
        >
          <Box
            as="h1"
            fontWeight="800"
            fontSize="3em"
            lineHeight="1.666em"
            color="gray.700"
          >
            About Us
          </Box>
          <FreeEstimates
            h="4em"
            w="4em"
            colorPalette={["red.500"]}
            display={{ base: "block", xl: "none" }}
          />
        </Box>
        <Box
          as="p"
          fontSize="1em"
          lineHeight="1.5em"
          color="gray.600"
          maxW="37.5em"
          textAlign={{ base: "center", xl: "start" }}
        >
          Duball Electric, Inc. is a family-owned business serving the Cedar
          Rapids and surrounding Iowa areas since 1987. Our philosopy has always
          been to provide the best work possible using only high quality
          products. We are a fully licensed and insured company dedicated to
          providing fair and trusted electrical services. Our name is on the
          work and we do not cut corners &mdash; our product is guaranteed.
        </Box>
      </Box>
      <FreeEstimates
        h="12.5em"
        w="12.5em"
        alignSelf="center"
        colorPalette={["red.500"]}
        display={{ base: "none", xl: "block" }}
      />
    </Box>
    <Box
      as="div"
      display="grid"
      justifyContent={{ base: "center", xl: "start" }}
      gridAutoFlow={{ base: "row", xl: "column" }}
      gridColumnGap={{ base: "2.5em", "2xl": "3.125em" }}
      gridRowGap="3em"
    >
      <AboutUsCard
        cardTitle="Residential"
        cardDescription={
          "For all of your home electrical needs, we are here to help. " +
          "From replacing a single receptacle to a complete rewire," +
          " we can get the job done right."
        }
        buttonMessage="View Residential"
      />
      <AboutUsCard
        cardTitle="Commercial"
        cardDescription={
          "We have the experience and equipment to get your business " +
          "projects done efficiently. Plus 24/7 service to ensure your " +
          "business gets the help it needs."
        }
        buttonMessage="View Commercial"
      />
      <AboutUsCard
        cardTitle="And More..."
        cardDescription={
          "Pools, hot tubs, parking lots, generators, underground, overhead " +
          "and more - if it's electrical, we can help!"
        }
        buttonMessage="View More"
      />
    </Box>
  </Box>
);
