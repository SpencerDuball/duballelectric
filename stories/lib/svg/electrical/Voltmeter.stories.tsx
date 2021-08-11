import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Voltmeter, VoltmeterPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Voltmeter",
  component: Voltmeter,
} as ComponentMeta<typeof Voltmeter>;

const Template: ComponentStory<typeof Voltmeter> = (args: VoltmeterPropsI) => (
  <Box display="flex" gap="20px">
    <Voltmeter {...args} />
    <Voltmeter {...args} fill="red.500" />
    <Voltmeter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
