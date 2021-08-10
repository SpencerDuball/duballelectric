import { useRef, useState } from "react";
import { ButtonProps, Button, forwardRef } from "@chakra-ui/react";
import { x, SystemProps } from "@xstyled/emotion";
import { filterProps } from "utility";
import { AngleDown } from "lib/svg/unicons";
import { DuballElectric } from "lib/svg/duball";
import { motion } from "framer-motion";

const MotionHeader = motion(x.header, { forwardMotionProps: true });

const NavButton = forwardRef<ButtonProps, "button">((props, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    color="gray.200"
    bg="none"
    _hover={{ bg: "none", color: "gray.300" }}
    _active={{ bg: "none", color: "gray.400" }}
    _focus={{ boxShadow: "none" }}
    {...props}
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
  >
    {props.children}
  </Button>
));

export interface HeaderPropsI extends SystemProps {}

export const Header = (props: HeaderPropsI) => {
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MotionHeader
      w="100%"
      h="3.75em"
      bg="gray.700"
      display="grid"
      position="relative"
      justifyItems="center"
      {...filterProps({ props, filterOut: ["transition"] })}
    >
      <x.div
        w="100%"
        h="3.75em"
        maxW="container.xl"
        display="grid"
        gridAutoFlow="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <x.nav display="grid" gridAutoFlow="column" w="max-content">
          <NavButton>Home</NavButton>
          <NavButton
            ref={servicesButtonRef}
            rightIcon={<AngleDown h="1em" w="1em" />}
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
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Contact
        </Button>
      </x.div>
    </MotionHeader>
  );
};
