import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BorderHorizontal, BorderHorizontalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderHorizontal",
  component: BorderHorizontal,
} as ComponentMeta<typeof BorderHorizontal>;

const Template: ComponentStory<typeof BorderHorizontal> = (
  args: BorderHorizontalPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BorderHorizontal {...args} />
    <BorderHorizontal {...args} fill="red.500" />
    <BorderHorizontal {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
