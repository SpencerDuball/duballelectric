import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeAlt, EnvelopeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeAlt",
  component: EnvelopeAlt,
} as ComponentMeta<typeof EnvelopeAlt>;

const Template: ComponentStory<typeof EnvelopeAlt> = (
  args: EnvelopeAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnvelopeAlt {...args} />
    <EnvelopeAlt {...args} fill="red.500" />
    <EnvelopeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
