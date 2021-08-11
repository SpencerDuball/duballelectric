import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeOpen, EnvelopeOpenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeOpen",
  component: EnvelopeOpen,
} as ComponentMeta<typeof EnvelopeOpen>;

const Template: ComponentStory<typeof EnvelopeOpen> = (
  args: EnvelopeOpenPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeOpen {...args} />
    <EnvelopeOpen {...args} fill="red.500" />
    <EnvelopeOpen {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
