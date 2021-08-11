import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeUpload, EnvelopeUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeUpload",
  component: EnvelopeUpload,
} as ComponentMeta<typeof EnvelopeUpload>;

const Template: ComponentStory<typeof EnvelopeUpload> = (
  args: EnvelopeUploadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeUpload {...args} />
    <EnvelopeUpload {...args} fill="red.500" />
    <EnvelopeUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
