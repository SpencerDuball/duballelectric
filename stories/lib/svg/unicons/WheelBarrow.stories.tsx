import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WheelBarrow, WheelBarrowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WheelBarrow",
  component: WheelBarrow,
} as ComponentMeta<typeof WheelBarrow>;

const Template: ComponentStory<typeof WheelBarrow> = (
  args: WheelBarrowPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <WheelBarrow {...args} />
    <WheelBarrow {...args} fill="red.500" />
    <WheelBarrow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
