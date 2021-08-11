import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Underline, UnderlinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Underline",
  component: Underline,
} as ComponentMeta<typeof Underline>;

const Template: ComponentStory<typeof Underline> = (args: UnderlinePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Underline {...args} />
    <Underline {...args} fill="red.500" />
    <Underline {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
