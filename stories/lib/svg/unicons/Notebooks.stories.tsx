import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Notebooks, NotebooksPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Notebooks",
  component: Notebooks,
} as ComponentMeta<typeof Notebooks>;

const Template: ComponentStory<typeof Notebooks> = (args: NotebooksPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Notebooks {...args} />
    <Notebooks {...args} fill="red.500" />
    <Notebooks {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
