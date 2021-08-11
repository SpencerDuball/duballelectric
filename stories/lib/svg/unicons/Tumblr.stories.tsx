import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tumblr, TumblrPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tumblr",
  component: Tumblr,
} as ComponentMeta<typeof Tumblr>;

const Template: ComponentStory<typeof Tumblr> = (args: TumblrPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Tumblr {...args} />
    <Tumblr {...args} fill="red.500" />
    <Tumblr {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
