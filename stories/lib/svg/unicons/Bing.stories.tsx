import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bing, BingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bing",
  component: Bing,
} as ComponentMeta<typeof Bing>;

const Template: ComponentStory<typeof Bing> = (args: BingPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bing {...args} />
    <Bing {...args} fill="red.500" />
    <Bing {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
