import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Brightness, BrightnessPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Brightness",
  component: Brightness,
} as ComponentMeta<typeof Brightness>;

const Template: ComponentStory<typeof Brightness> = (
  args: BrightnessPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Brightness {...args} />
    <Brightness {...args} fill="red.500" />
    <Brightness {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
