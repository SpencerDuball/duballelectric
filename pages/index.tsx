import { Box } from "@chakra-ui/react";
import { Hero, AboutUs, ContactUs, NotificationSystem } from "lib/ui";
import { NotificationSystemProvider } from "context/notification-system";

export default function Home() {
  return (
    <NotificationSystemProvider>
      <NotificationSystem placement="top-end" />
      <Hero />
      <AboutUs />
      <Box as="div" w="80%" h="0.125em" bg="gray.100" justifySelf="center" />
      <ContactUs />
    </NotificationSystemProvider>
  );
}
