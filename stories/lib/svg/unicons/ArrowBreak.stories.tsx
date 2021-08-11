import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowBreak, ArrowBreakPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowBreak",
  component: ArrowBreak,
} as ComponentMeta<typeof ArrowBreak>;

const Template: ComponentStory<typeof ArrowBreak> = (
  args: ArrowBreakPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowBreak {...args} />
    <ArrowBreak {...args} fill="red.500" />
    <ArrowBreak {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
