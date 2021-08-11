import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Asterisk, AsteriskPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Asterisk",
  component: Asterisk,
} as ComponentMeta<typeof Asterisk>;

const Template: ComponentStory<typeof Asterisk> = (args: AsteriskPropsI) => (
  <Box display="flex" gap="20px">
    <Asterisk {...args} />
    <Asterisk {...args} fill="red.500" />
    <Asterisk {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
