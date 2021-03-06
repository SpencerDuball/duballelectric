import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LinkH, LinkHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LinkH",
  component: LinkH,
} as ComponentMeta<typeof LinkH>;

const Template: ComponentStory<typeof LinkH> = (args: LinkHPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <LinkH {...args} />
    <LinkH {...args} fill="red.500" />
    <LinkH {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
