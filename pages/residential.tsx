import { Box } from "@chakra-ui/react";
import {
  ServicePageIntro,
  ServicePageIntroTitle,
  ServicePageIntroDescription,
  ServicePageIntroIcon,
} from "lib/ui";
import { Home } from "lib/svg/unicons";

export default function Residential() {
  return (
    <Box as="div" display="grid" gridAutoRows="max-content">
      <ServicePageIntro>
        <ServicePageIntroTitle>Residential</ServicePageIntroTitle>
        <ServicePageIntroDescription>
          For all of your home electrical needs, we are here to help. From
          replacing a single receptacle to a complete rewire, we can get the job
          done right.
        </ServicePageIntroDescription>
        <ServicePageIntroIcon icon={<Home />} />
      </ServicePageIntro>
    </Box>
  );
}
