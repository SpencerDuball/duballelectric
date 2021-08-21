import { Box } from "@chakra-ui/react";
import {
  ServicePageIntro,
  ServicePageIntroTitle,
  ServicePageIntroDescription,
  ServicePageIntroIcon,
} from "lib/ui";
import { Jackhammer } from "lib/svg/unicons";

export default function Commercial() {
  return (
    <Box as="div" display="grid" gridAutoRows="max-content">
      <ServicePageIntro>
        <ServicePageIntroTitle>More</ServicePageIntroTitle>
        <ServicePageIntroDescription>
          Pools, hot tubs, parking lots, generators, underground, overhead and
          more - if it’s electrical, we can help!
        </ServicePageIntroDescription>
        <ServicePageIntroIcon icon={<Jackhammer />} />
      </ServicePageIntro>
    </Box>
  );
}
