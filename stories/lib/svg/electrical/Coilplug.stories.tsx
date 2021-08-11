import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Coilplug, CoilplugPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Coilplug",
  component: Coilplug,
} as ComponentMeta<typeof Coilplug>;

const Template: ComponentStory<typeof Coilplug> = (args: CoilplugPropsI) => (
  <Box display="flex" gap="20px">
    <Coilplug {...args} />
    <Coilplug {...args} fill="red.500" />
    <Coilplug {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
