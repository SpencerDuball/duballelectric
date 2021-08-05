import { SystemProps } from "@chakra-ui/react";
import { x } from "@xstyled/emotion";

export interface HeaderPropsI extends SystemProps {}

export const Header = (props: HeaderPropsI) => (
  <x.header w="100%" h="60px" bg="green.500" {...props}></x.header>
);
