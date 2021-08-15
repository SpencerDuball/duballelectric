import { Box, Button, BoxProps } from "@chakra-ui/react";
import { HeroTransitionArch } from "lib/svg/duball";
import Link from "next/link";
import Image from "next/image";
import duballBoomtruck from "../../public/images/duball_boomtruck.png";

const HeroImage = (props: BoxProps) => (
  <Box
    as="div"
    w="44em"
    h="29em"
    borderRadius="lg"
    bg="gray.200"
    p="0.125em"
    boxShadow="lg"
    {...props}
  >
    <Box
      as="div"
      h="100%"
      w="100%"
      position="relative"
      overflow="hidden"
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
);

export interface HeroPropsI extends BoxProps {}

export const Hero = (props: HeroPropsI) => (
  <Box
    as="section"
    w="100%"
    h="100vh"
    display="grid"
    gridTemplateRows="1fr max-content"
    position="relative"
    {...props}
  >
    {/* Content Section */}
    <Box
      as="div"
      w="100%"
      bg="gray.100"
      position="relative"
      overflow="hidden"
      fontSize={{ base: "0.6em", sm: "0.70em", "2xl": "0.85em", "3xl": "1em" }}
      px={{ base: "0.625em", lg: "1em" }}
    >
      <Box
        as="div"
        position="absolute"
        bottom="0"
        w="100%"
        h="100%"
        backgroundImage={{
          base: "none",
          sm: "url(/images/icons_background_xs.svg)",
          md: "url(/images/icons_background_sm.svg)",
          lg: "url(/images/icons_background_md.svg)",
          xl: "url(/images/icons_background_lg.svg)",
        }}
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
      />
      {/* Content */}
      <Box
        as="div"
        h="100%"
        w="100%"
        display="grid"
        gridAutoFlow="column"
        justifyContent="center"
        alignItems="center"
        gridColumnGap="3em"
      >
        {/* Message */}
        <Box
          as="div"
          display="grid"
          gridRowGap="1.875em"
          h="max-content"
          justifyItems={{ base: "center", xl: "start" }}
        >
          <Box
            as="h1"
            fontWeight="800"
            fontSize="3em"
            lineHeight="1.16666em"
            color="gray.700"
            maxW="9.375em"
            textAlign={{ base: "center", xl: "start" }}
          >
            Trusted Electrical Services for Over 30 Years
          </Box>
          <HeroImage
            display={{ base: "block", xl: "none" }}
            fontSize={{ base: "0.7em", lg: "0.85em" }}
          />
          <Box
            as="p"
            fontSize="1em"
            lineHeight="1.5em"
            color="gray.600"
            maxW="28.125em"
            textAlign={{ base: "center", xl: "start" }}
          >
            Duball Electric, Inc. is a family-owned business providing
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
        <HeroImage
          display={{
            base: "none",
            xl: "block",
          }}
        />
      </Box>
    </Box>
    {/* Arch Section Transition */}
    <HeroTransitionArch
      w="100%"
      fill="gray.100"
      transform="translateY(-0.0625em)"
    />
  </Box>
);
