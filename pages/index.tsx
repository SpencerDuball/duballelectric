import { Box } from "@chakra-ui/react";
import { Hero, AboutUs, ContactUs } from "lib/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Box as="div" w="80%" h="0.125em" bg="gray.100" justifySelf="center" />
      <ContactUs />
    </>
  );
}
