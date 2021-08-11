import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sorting, SortingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sorting",
  component: Sorting,
} as ComponentMeta<typeof Sorting>;

const Template: ComponentStory<typeof Sorting> = (args: SortingPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sorting {...args} />
    <Sorting {...args} fill="red.500" />
    <Sorting {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
