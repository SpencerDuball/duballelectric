import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Envelope, EnvelopePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Envelope",
  component: Envelope,
} as ComponentMeta<typeof Envelope>;

const Template: ComponentStory<typeof Envelope> = (args: EnvelopePropsI) => (
  <Box display="flex" gap="20px">
    <Envelope {...args} />
    <Envelope {...args} fill="red.500" />
    <Envelope {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
