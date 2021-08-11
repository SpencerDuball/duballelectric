import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ListOl, ListOlPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListOl",
  component: ListOl,
} as ComponentMeta<typeof ListOl>;

const Template: ComponentStory<typeof ListOl> = (args: ListOlPropsI) => (
  <Box display="flex" gap="20px">
    <ListOl {...args} />
    <ListOl {...args} fill="red.500" />
    <ListOl {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
