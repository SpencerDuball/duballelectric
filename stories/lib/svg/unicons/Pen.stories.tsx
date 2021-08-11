import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Pen, PenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pen",
  component: Pen,
} as ComponentMeta<typeof Pen>;

const Template: ComponentStory<typeof Pen> = (args: PenPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Pen {...args} />
    <Pen {...args} fill="red.500" />
    <Pen {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
