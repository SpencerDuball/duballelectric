import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeUploadAlt, EnvelopeUploadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeUploadAlt",
  component: EnvelopeUploadAlt,
} as ComponentMeta<typeof EnvelopeUploadAlt>;

const Template: ComponentStory<typeof EnvelopeUploadAlt> = (
  args: EnvelopeUploadAltPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeUploadAlt {...args} />
    <EnvelopeUploadAlt {...args} fill="red.500" />
    <EnvelopeUploadAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
