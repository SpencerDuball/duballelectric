import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ListUl, ListUlPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListUl",
  component: ListUl,
} as ComponentMeta<typeof ListUl>;

const Template: ComponentStory<typeof ListUl> = (args: ListUlPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ListUl {...args} />
    <ListUl {...args} fill="red.500" />
    <ListUl {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
