import { Box, Button, BoxProps } from "@chakra-ui/react";
import { HeroTransitionArch } from "lib/svg/duball";
import Link from "next/link";
import Image from "next/image";
import duballBoomtruck from "../../public/images/duball_boomtruck.png";

export interface HeroPropsI extends BoxProps {}

export const Hero = (props: HeroPropsI) => (
  <Box
    as="section"
    w="100%"
    h="100vh"
    display="grid"
    gridTemplateRows="1fr max-content"
    {...props}
  >
    {/* Content Section */}
    <Box
      as="div"
      w="100%"
      bg="gray.100"
      position="relative"
      overflow="hidden"
      fontSize={{ base: "0.70em", "2xl": "0.85em", "3xl": "1em" }}
      px={{ base: "0.625em", lg: "1em" }}
    >
      {/* Content */}
      <Box
        as="div"
        h="100%"
        w="100%"
        display="grid"
        gridAutoFlow="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        gridColumnGap="3em"
      >
        {/* Message */}
        <Box
          as="div"
          display="grid"
          gridRowGap="1.875em"
          maxW="28.125em"
          h="max-content"
        >
          <Box
            as="h1"
            fontWeight="800"
            fontSize="3em"
            lineHeight="1.16666em"
            color="gray.700"
          >
            Trusted Electrical Services for Over 30 Years
          </Box>
          <Box as="p" fontSize="1em" lineHeight="1.5em" color="gray.600">
            Duball Electric, Inc. ia a family-owned business providing
            electrical services for more than 30 years in the Cedar Rapids and
            surrounding areas.
          </Box>
          <Link href="#contact" passHref>
            <Button variant="solid" colorScheme="red" w="max-content">
              Contact Us!
            </Button>
          </Link>
        </Box>
        {/* Image */}
        <Box
          as="div"
          w="44em"
          h="29em"
          borderRadius="lg"
          bg="gray.200"
          p="0.125em"
          boxShadow="lg"
        >
          <Box
            as="div"
            h="100%"
            w="100%"
            position="relative"
            overflow="clip"
            borderRadius="lg"
          >
            <Image
              src={duballBoomtruck}
              alt="Picture of a Duball Electric boomtruck, and building."
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </Box>
      </Box>
      <Box
        as="div"
        position="absolute"
        bottom="0"
        w="100%"
        h="100%"
        backgroundImage={{
          base: "url(/images/icons_background_sm.svg)",
          sm: "url(/images/icons_background_md.svg)",
          lg: "url(/images/icons_background_md.svg)",
          xl: "url(/images/icons_background_lg.svg)",
        }}
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
      />
    </Box>
    {/* Arch Section Transition */}
    <HeroTransitionArch w="100%" fill="gray.100" />
  </Box>
);
