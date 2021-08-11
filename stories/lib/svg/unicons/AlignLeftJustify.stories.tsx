import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignLeftJustify, AlignLeftJustifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignLeftJustify",
  component: AlignLeftJustify,
} as ComponentMeta<typeof AlignLeftJustify>;

const Template: ComponentStory<typeof AlignLeftJustify> = (
  args: AlignLeftJustifyPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AlignLeftJustify {...args} />
    <AlignLeftJustify {...args} fill="red.500" />
    <AlignLeftJustify {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
