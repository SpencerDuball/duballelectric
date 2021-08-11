import { useRef, useState } from "react";
import { ButtonProps, Button, forwardRef } from "@chakra-ui/react";
import { x, SystemProps } from "@xstyled/emotion";
import { filterProps } from "utility";
import { AngleDown, Home, Building, Jackhammer } from "lib/svg/unicons";
import { DuballElectric } from "lib/svg/duball";
import { motion, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";

const MotionHeader = motion(x.header);
const MotionDiv = motion(x.div);

interface ServicePageLinkPropsI extends SystemProps {
  icon: (props: SystemProps) => JSX.Element;
  linkTitle: string;
  linkDescription: string;
}
const ServicePageLink = (props: ServicePageLinkPropsI) => {
  return (
    <x.a
      w="18.75em"
      display="grid"
      gridTemplateColumns="max-content 1fr"
      gridTemplateRows="max-content max-content"
      columnGap="0.625em"
      p="0.625em"
      cursor="pointer"
      borderRadius="0.625em"
      bg={{ hover: "whiteAlpha.200", active: "whiteAlpha.300" }}
      {...filterProps({
        props,
        filterOut: ["icon", "linkTitle", "linkDescription"],
      })}
    >
      <x.div
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
      </x.div>
      <x.h1 fontWeight="600" fontSize="1em" lineHeight="1.5em" color="gray.400">
        {props.linkTitle}
      </x.h1>
      <x.p fontWeight="500" fontSize="0.75em" lineHeight="1em" color="gray.200">
        {props.linkDescription}
      </x.p>
    </x.a>
  );
};

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

export interface HeaderPropsI extends SystemProps {}

export const Header = (props: HeaderPropsI) => {
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [areServicesDisplayed, setAreServicesDisplayed] = useState(false);
  const [areServicesVisible, setAreServicesVisible] = useState(false);

  return (
    <AnimateSharedLayout>
      <MotionHeader
        w="100%"
        bg="gray.700"
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
        <MotionDiv w="100%" maxW="container.xl" layoutId="header_mwc">
          {/* Header Row 1 */}
          <MotionDiv
            h="3.75em"
            display="grid"
            gridAutoFlow="column"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
            layoutId="header_row_1"
          >
            <x.nav display="grid" gridAutoFlow="column" w="max-content">
              <Link href="/" passHref>
                <NavButton>Home</NavButton>
              </Link>
              <NavButton
                ref={servicesButtonRef}
                rightIcon={<AngleDown h="1em" w="1em" />}
                onClick={() => {
                  setAreServicesDisplayed(!areServicesDisplayed);
                  if (areServicesDisplayed) setAreServicesVisible(false);
                }}
              >
                Services
              </NavButton>
            </x.nav>
            <Link href="/" passHref>
              <x.a
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                h="calc(100% - 0.625em)"
              >
                <DuballElectric h="100%" colorPalette={["none", "gray.200"]} />
              </x.a>
            </Link>
            <Link href="#contact" passHref>
              <Button
                variant="outline"
                color="gray.200"
                borderColor="gray.200"
                _hover={{ bg: "gray.600" }}
                _active={{ bg: "gray.500" }}
              >
                Contact
              </Button>
            </Link>
          </MotionDiv>
          {/* Header Row 2 */}
          {areServicesDisplayed ? (
            <MotionDiv
              initial="hidden"
              animate={areServicesVisible ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              w="100%"
              layoutId="header_row_2"
              display="grid"
              gridAutoFlow="column"
              gridAutoColumns="1fr"
              gap="1em"
            >
              <ServicePageLink
                icon={Home}
                linkTitle="Residential"
                linkDescription="For all your home electrical needs"
                w="100%"
              />
              <ServicePageLink
                icon={Building}
                linkTitle="Commercial"
                linkDescription="Large or small projects, leave the electrical to us."
                w="100%"
              />
              <ServicePageLink
                icon={Jackhammer}
                linkTitle="Other"
                linkDescription="Pools, parking lots, generators, and more - ask us!"
                w="100%"
              />
            </MotionDiv>
          ) : null}
        </MotionDiv>
      </MotionHeader>
    </AnimateSharedLayout>
  );
};
