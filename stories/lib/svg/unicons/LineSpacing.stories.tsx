import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LineSpacing, LineSpacingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LineSpacing",
  component: LineSpacing,
} as ComponentMeta<typeof LineSpacing>;

const Template: ComponentStory<typeof LineSpacing> = (
  args: LineSpacingPropsI
) => (
  <Box display="flex" gap="20px">
    <LineSpacing {...args} />
    <LineSpacing {...args} fill="red.500" />
    <LineSpacing {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
