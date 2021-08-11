import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BookOpen, BookOpenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BookOpen",
  component: BookOpen,
} as ComponentMeta<typeof BookOpen>;

const Template: ComponentStory<typeof BookOpen> = (args: BookOpenPropsI) => (
  <Box display="flex" gap="20px">
    <BookOpen {...args} />
    <BookOpen {...args} fill="red.500" />
    <BookOpen {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
