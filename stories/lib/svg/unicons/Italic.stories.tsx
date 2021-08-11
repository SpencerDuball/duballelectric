import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Italic, ItalicPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Italic",
  component: Italic,
} as ComponentMeta<typeof Italic>;

const Template: ComponentStory<typeof Italic> = (args: ItalicPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Italic {...args} />
    <Italic {...args} fill="red.500" />
    <Italic {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
