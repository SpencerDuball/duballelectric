import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HighVoltage, HighVoltagePropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/HighVoltage",
  component: HighVoltage,
} as ComponentMeta<typeof HighVoltage>;

const Template: ComponentStory<typeof HighVoltage> = (
  args: HighVoltagePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HighVoltage {...args} />
    <HighVoltage {...args} fill="red.500" />
    <HighVoltage {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
