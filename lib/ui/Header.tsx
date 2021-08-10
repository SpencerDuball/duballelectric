import { useRef, useState } from "react";
import { ButtonProps, Button, forwardRef } from "@chakra-ui/react";
import { x, SystemProps } from "@xstyled/emotion";
import { filterProps } from "utility";
import { AngleDown } from "lib/svg/unicons";
import { DuballElectric } from "lib/svg/duball";
import { motion, AnimateSharedLayout } from "framer-motion";

const MotionHeader = motion(x.header);
const MotionDiv = motion(x.div);

const NavButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    color="gray.200"
    bg="none"
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
        onAnimationStart={() => console.log("animation started")}
        onLayoutAnimationComplete={() => {
          setAreServicesVisible(areServicesDisplayed);
          console.log("Animation complete...");
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
              <NavButton>Home</NavButton>
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
            <DuballElectric
              position="absolute"
              left="50%"
              transform="translateX(-50%)"
              h="calc(100% - 0.625em)"
              colorPalette={["none", "gray.200"]}
            />
            <Button
              variant="outline"
              color="gray.200"
              borderColor="gray.200"
              _hover={{ bg: "gray.600" }}
              _active={{ bg: "gray.500" }}
            >
              Contact
            </Button>
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
              h="3em"
              bg="red.300"
              layoutId="header_row_2"
            >
              Spencer HEre
            </MotionDiv>
          ) : null}
        </MotionDiv>
      </MotionHeader>
    </AnimateSharedLayout>
  );
};
