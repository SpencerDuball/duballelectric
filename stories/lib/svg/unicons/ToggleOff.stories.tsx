import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ToggleOff, ToggleOffPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ToggleOff",
  component: ToggleOff,
} as ComponentMeta<typeof ToggleOff>;

const Template: ComponentStory<typeof ToggleOff> = (args: ToggleOffPropsI) => (
  <Box display="flex" gap="20px">
    <ToggleOff {...args} />
    <ToggleOff {...args} fill="red.500" />
    <ToggleOff {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
