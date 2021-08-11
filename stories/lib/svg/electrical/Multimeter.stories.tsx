import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Multimeter, MultimeterPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Multimeter",
  component: Multimeter,
} as ComponentMeta<typeof Multimeter>;

const Template: ComponentStory<typeof Multimeter> = (
  args: MultimeterPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Multimeter {...args} />
    <Multimeter {...args} fill="red.500" />
    <Multimeter {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
