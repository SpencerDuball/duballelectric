import { useRef, useState } from "react";
import {
  ButtonProps,
  Button,
  forwardRef,
  Box,
  BoxProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { filterProps, MotionBox } from "utility";
import { AngleDown, Home, Building, Jackhammer } from "lib/svg/unicons";
import { DuballElectric } from "lib/svg/duball";
import { AnimateSharedLayout } from "framer-motion";
import Link from "next/link";

interface ServicePageLinkPropsI extends BoxProps {
  icon: (props: BoxProps) => JSX.Element;
  linkTitle: string;
  linkDescription: string;
}
const ServicePageLink = forwardRef<ServicePageLinkPropsI, "a">((props, ref) => {
  return (
    <Box
      as="a"
      ref={ref}
      w="18.75em"
      display="grid"
      gridTemplateColumns="max-content 1fr"
      gridTemplateRows="max-content max-content"
      gridColumnGap="0.625em"
      p="0.625em"
      cursor="pointer"
      borderRadius="0.625em"
      _hover={{ bg: "whiteAlpha.200" }}
      _active={{ bg: "whiteAlpha.300" }}
      transition="background-color 250ms linear"
      fontSize={{ base: "0.75em", sm: "0.85em", md: "1em" }}
      {...filterProps({
        props,
        filterOut: ["icon", "linkTitle", "linkDescription"],
      })}
    >
      <Box
        as="div"
        h="2.5em"
        w="2.5em"
        gridColumn="1 / span 1"
        gridRow="1 / span 2"
        borderRadius="100em"
        overflow="hidden"
        display="grid"
        alignItems="center"
        justifyItems="center"
        bg="gray.400"
      >
        <props.icon h="1.25em" w="1.25em" fill="gray.700" />
      </Box>
      <Box
        as="h1"
        fontWeight="600"
        fontSize="1em"
        lineHeight="1.5em"
        color="gray.400"
      >
        {props.linkTitle}
      </Box>
      <Box
        as="p"
        fontWeight="500"
        fontSize="0.75em"
        lineHeight="1em"
        color="gray.200"
      >
        {props.linkDescription}
      </Box>
    </Box>
  );
});

const NavButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    color="gray.200"
    _hover={{ bg: "none", color: "gray.300" }}
    _active={{ bg: "none", color: "gray.400" }}
    _focus={{ boxShadow: "none" }}
    sx={{
      "& svg": {
        fill: "gray.200",
      },
      "&:hover svg": {
        fill: "gray.300",
      },
      "&:active svg": {
        fill: "gray.400",
      },
    }}
    {...props}
  >
    {props.children}
  </Button>
));

export interface HeaderPropsI extends BoxProps {}

export const Header = (props: HeaderPropsI) => {
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [areServicesDisplayed, setAreServicesDisplayed] = useState(false);
  const [areServicesVisible, setAreServicesVisible] = useState(false);
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", lg: "md" });

  return (
    <AnimateSharedLayout>
      <MotionBox
        as="header"
        w="100%"
        bg="gray.700"
        px={{ base: "0.625em", lg: "1em" }}
        boxShadow="lg"
        display="grid"
        justifyItems="center"
        layoutId="header_header"
        onLayoutAnimationComplete={() => {
          setAreServicesVisible(areServicesDisplayed);
        }}
        {...filterProps({ props, filterOut: ["transition"] })}
      >
        {/* Maximum Width Container */}
        <MotionBox as="div" w="100%" maxW="container.xl" layoutId="header_mwc">
          {/* Header Row 1 */}
          <MotionBox
            as="div"
            h="3.75em"
            display="grid"
            gridAutoFlow="column"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
            layoutId="header_row_1"
          >
            <Box as="nav" display="grid" gridAutoFlow="column" w="max-content">
              <Link href="/" passHref>
                <NavButton
                  display={{ base: "none", md: "block" }}
                  size={buttonSize}
                >
                  Home
                </NavButton>
              </Link>
              <NavButton
                ref={servicesButtonRef}
                rightIcon={<AngleDown height="1em" width="1em" />}
                size={buttonSize}
                onClick={() => {
                  setAreServicesDisplayed(!areServicesDisplayed);
                  if (areServicesDisplayed) setAreServicesVisible(false);
                }}
              >
                Services
              </NavButton>
            </Box>
            <Link href="/" passHref>
              <Box
                as="a"
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                h={{ base: "2.25em", sm: "2.5em", lg: "calc(100% - 0.625em)" }}
              >
                <DuballElectric h="100%" colorPalette={["none", "gray.200"]} />
              </Box>
            </Link>
            <Link href="#contact" passHref>
              <Button
                size={buttonSize}
                variant="outline"
                color="gray.200"
                borderColor="gray.200"
                _hover={{ bg: "gray.600" }}
                _active={{ bg: "gray.500" }}
              >
                Contact
              </Button>
            </Link>
          </MotionBox>
          {/* Header Row 2 */}
          {areServicesDisplayed ? (
            <MotionBox
              initial="hidden"
              animate={areServicesVisible ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              w="100%"
              layoutId="header_row_2"
              display="grid"
              gridAutoFlow={{ base: "row", xl: "column" }}
              gridAutoColumns="1fr"
              gridGap="1em"
              paddingBottom="1em"
            >
              <Link href="/residential" passHref>
                <ServicePageLink
                  icon={Home}
                  linkTitle="Residential"
                  linkDescription="For all your home electrical needs"
                  w="100%"
                />
              </Link>
              <Link href="/commercial" passHref>
                <ServicePageLink
                  icon={Building}
                  linkTitle="Commercial"
                  linkDescription="Large or small projects, leave the electrical to us."
                  w="100%"
                />
              </Link>
              <Link href="/more" passHref>
                <ServicePageLink
                  icon={Jackhammer}
                  linkTitle="More"
                  linkDescription="Pools, parking lots, generators, and more - ask us!"
                  w="100%"
                />
              </Link>
            </MotionBox>
          ) : null}
        </MotionBox>
      </MotionBox>
    </AnimateSharedLayout>
  );
};
