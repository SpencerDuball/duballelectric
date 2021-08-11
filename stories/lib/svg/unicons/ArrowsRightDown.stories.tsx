import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsRightDown, ArrowsRightDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsRightDown",
  component: ArrowsRightDown,
} as ComponentMeta<typeof ArrowsRightDown>;

const Template: ComponentStory<typeof ArrowsRightDown> = (
  args: ArrowsRightDownPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsRightDown {...args} />
    <ArrowsRightDown {...args} fill="red.500" />
    <ArrowsRightDown {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
