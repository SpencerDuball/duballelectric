import { Box, BoxProps } from "@chakra-ui/react";
import Link from "next/link";
import {
  DuballElectric,
  FindUsOnFacebook,
  Visa,
  Mastercard,
  Discover,
} from "lib/svg/duball";

const FooterListTitle = (props: BoxProps) => (
  <Box
    as="h1"
    fontWeight="600"
    fontSize="1em"
    lineHeight="1.5em"
    color="gray.700"
    {...props}
  >
    {props.children}
  </Box>
);
const FooterListItem = (props: BoxProps) => (
  <Box as="ul" fontWeight="500" fontSize="0.75em" lineHeight="1em" {...props}>
    {props.children}
  </Box>
);

export interface FooterPropsI extends BoxProps {}

export const Footer = (props: FooterPropsI) => (
  <Box
    as="footer"
    w="100%"
    bg="gray.100"
    display="grid"
    justifyItems="center"
    {...props}
  >
    {/* Maximum Width Container */}
    <Box
      as="div"
      w="100%"
      maxW="container.xl"
      py="1.875em"
      display="grid"
      position="relative"
      gridTemplateColumns="max-content max-content"
      gridTemplateRows="max-content max-content max-content"
      justifyContent={{ base: "center", xl: "space-between" }}
      alignItems="center"
      px={{ base: "0.625em", lg: "1em" }}
      fontSize={{ base: "0.90em", xl: "0.80em", "2xl": "0.90em" }}
      gridRowGap="1.5em"
    >
      {/* left aligned content */}
      <Box
        as="div"
        display="grid"
        gridAutoFlow="column"
        gridAutoColumns={{ base: "1fr", xl: "max-content" }}
        gridColumnGap={{ base: "2em", xl: "6em" }}
        gridColumn={{ base: "1 / span 2", xl: "1 / span 1" }}
        gridRow={{ base: "2 / span 1", xl: "1 / span 3" }}
        justifyItems={{ base: "center", xl: "start" }}
      >
        <Box as="div" display="grid" gridRowGap="1.25em" maxW="12.5em">
          <FooterListTitle>SITEMAP</FooterListTitle>
          <Box as="ul" display="grid" gridRowGap="0.625em">
            <Link href="/" passHref>
              <Box as="a">
                <FooterListItem>Home</FooterListItem>
              </Box>
            </Link>
            <Link href="/residential" passHref>
              <Box as="a">
                <FooterListItem>Residential</FooterListItem>
              </Box>
            </Link>
            <Link href="/commercial" passHref>
              <Box as="a">
                <FooterListItem>Commercial</FooterListItem>
              </Box>
            </Link>
            <Link href="/more" passHref>
              <Box as="a">
                <FooterListItem>Other Services</FooterListItem>
              </Box>
            </Link>
          </Box>
        </Box>
        <Box as="div" display="grid" gridRowGap="1.25em" maxW="12.5em">
          <FooterListTitle>CONTACT</FooterListTitle>
          <Box as="ul" display="grid" gridRowGap="0.625em">
            <Box as="a" href="tel:+1-319-393-2965">
              <FooterListItem>
                <Box as="span" textDecoration="underline">
                  Phone:
                </Box>{" "}
                (319) 393-1393
              </FooterListItem>
            </Box>
            <FooterListItem>
              <Box as="span" textDecoration="underline">
                Fax:
              </Box>{" "}
              (319) 368-2965
            </FooterListItem>
            <Box as="a" href="mailto:tammy@duballelectric.com">
              <FooterListItem>
                <Box as="span" textDecoration="underline">
                  Email:
                </Box>{" "}
                tammy@duballelectric.com
              </FooterListItem>
            </Box>
            <FooterListItem>
              <Box as="span" textDecoration="underline">
                Address:
              </Box>{" "}
              901 2nd Ave SW, Cedar Rapids IA 52404
            </FooterListItem>
          </Box>
        </Box>
      </Box>
      {/* center aligned content */}
      <Box
        as="div"
        position={{ base: "relative", xl: "absolute" }}
        left="50%"
        transform="translateX(-50%)"
        display="grid"
        alignContent="space-between"
        justifyItems="center"
        h="100%"
        py={{ base: "0em", xl: "1.875em" }}
        gridColumn={{ base: "1 / span 2", xl: "none" }}
        gridRow={{ base: "1 / span 1", xl: "none" }}
        gridRowGap="0.625em"
      >
        <Link href="/" passHref>
          <Box as="a">
            <DuballElectric w="9.375em" />
          </Box>
        </Link>
        <Box as="div" display="grid" gridRowGap="0.25em">
          <Box
            as="p"
            fontWeight="500"
            fontSize="0.75em"
            lineHeight="1em"
            textAlign="center"
            color="gray.700"
          >
            Mon-Fri: 8:00AM - 4:30PM
          </Box>
          <Box
            as="p"
            fontWeight="500"
            fontSize="0.75em"
            lineHeight="1em"
            textAlign="center"
            color="gray.700"
          >
            After hours emergency service available.
          </Box>
        </Box>
      </Box>
      {/* right aligned content */}
      <Box
        as="div"
        display="grid"
        alignContent="space-between"
        justifyItems={{ base: "center", xl: "end" }}
        h="100%"
        gridColumn={{ base: "1 / span 2", xl: "2 / span 1" }}
        gridRow={{ base: "3 / span 1", xl: "1 / span 3" }}
        gridRowGap="0.625em"
      >
        <Link href="https://facebook.com/duballelectric" passHref>
          <Box as="a">
            <FindUsOnFacebook w="8em" fill="blue.400" />
          </Box>
        </Link>
        <Box
          as="div"
          display="grid"
          gridAutoFlow="column"
          gridColumnGap="0.625em"
        >
          <Visa h="1.875em" />
          <Mastercard h="1.875em" />
          <Discover h="1.875em" />
        </Box>
      </Box>
    </Box>
  </Box>
);
