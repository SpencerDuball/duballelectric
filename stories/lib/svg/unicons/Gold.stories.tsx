import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Gold, GoldPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Gold",
  component: Gold,
} as ComponentMeta<typeof Gold>;

const Template: ComponentStory<typeof Gold> = (args: GoldPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Gold {...args} />
    <Gold {...args} fill="red.500" />
    <Gold {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
