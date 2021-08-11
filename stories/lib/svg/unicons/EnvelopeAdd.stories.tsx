import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeAdd, EnvelopeAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeAdd",
  component: EnvelopeAdd,
} as ComponentMeta<typeof EnvelopeAdd>;

const Template: ComponentStory<typeof EnvelopeAdd> = (
  args: EnvelopeAddPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeAdd {...args} />
    <EnvelopeAdd {...args} fill="red.500" />
    <EnvelopeAdd {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
