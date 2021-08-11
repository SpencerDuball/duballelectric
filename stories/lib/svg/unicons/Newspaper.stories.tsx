import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Newspaper, NewspaperPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Newspaper",
  component: Newspaper,
} as ComponentMeta<typeof Newspaper>;

const Template: ComponentStory<typeof Newspaper> = (args: NewspaperPropsI) => (
  <Box display="flex" gap="20px">
    <Newspaper {...args} />
    <Newspaper {...args} fill="red.500" />
    <Newspaper {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
