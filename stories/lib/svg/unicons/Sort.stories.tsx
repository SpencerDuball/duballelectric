import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sort, SortPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sort",
  component: Sort,
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = (args: SortPropsI) => (
  <Box display="flex" gap="20px">
    <Sort {...args} />
    <Sort {...args} fill="red.500" />
    <Sort {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
