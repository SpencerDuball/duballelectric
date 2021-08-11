import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  EnvelopeDownloadAlt,
  EnvelopeDownloadAltPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeDownloadAlt",
  component: EnvelopeDownloadAlt,
} as ComponentMeta<typeof EnvelopeDownloadAlt>;

const Template: ComponentStory<typeof EnvelopeDownloadAlt> = (
  args: EnvelopeDownloadAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeDownloadAlt {...args} />
    <EnvelopeDownloadAlt {...args} fill="red.500" />
    <EnvelopeDownloadAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
