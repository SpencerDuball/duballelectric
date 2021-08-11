import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsResizeH, ArrowsResizeHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsResizeH",
  component: ArrowsResizeH,
} as ComponentMeta<typeof ArrowsResizeH>;

const Template: ComponentStory<typeof ArrowsResizeH> = (
  args: ArrowsResizeHPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsResizeH {...args} />
    <ArrowsResizeH {...args} fill="red.500" />
    <ArrowsResizeH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
