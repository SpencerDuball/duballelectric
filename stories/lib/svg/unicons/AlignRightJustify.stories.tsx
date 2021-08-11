import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AlignRightJustify, AlignRightJustifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignRightJustify",
  component: AlignRightJustify,
} as ComponentMeta<typeof AlignRightJustify>;

const Template: ComponentStory<typeof AlignRightJustify> = (
  args: AlignRightJustifyPropsI
) => (
  <Box display="flex" gap="20px">
    <AlignRightJustify {...args} />
    <AlignRightJustify {...args} fill="red.500" />
    <AlignRightJustify {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
