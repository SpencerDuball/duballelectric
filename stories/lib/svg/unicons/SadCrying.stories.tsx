import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SadCrying, SadCryingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SadCrying",
  component: SadCrying,
} as ComponentMeta<typeof SadCrying>;

const Template: ComponentStory<typeof SadCrying> = (args: SadCryingPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SadCrying {...args} />
    <SadCrying {...args} fill="red.500" />
    <SadCrying {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
