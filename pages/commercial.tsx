import { Box } from "@chakra-ui/react";
import {
  ServicePageIntro,
  ServicePageIntroTitle,
  ServicePageIntroDescription,
  ServicePageIntroIcon,
} from "lib/ui";
import { Building } from "lib/svg/unicons";

export default function Commercial() {
  return (
    <Box as="div" display="grid" gridAutoRows="max-content">
      <ServicePageIntro>
        <ServicePageIntroTitle>Commercial</ServicePageIntroTitle>
        <ServicePageIntroDescription>
          We have the experience and equipment to get your business projects
          done efficiently. Plus 24/7 service to ensure your business gets the
          help it needs.
        </ServicePageIntroDescription>
        <ServicePageIntroIcon icon={<Building />} />
      </ServicePageIntro>
    </Box>
  );
}
