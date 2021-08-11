import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DiceSix, DiceSixPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceSix",
  component: DiceSix,
} as ComponentMeta<typeof DiceSix>;

const Template: ComponentStory<typeof DiceSix> = (args: DiceSixPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <DiceSix {...args} />
    <DiceSix {...args} fill="red.500" />
    <DiceSix {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
