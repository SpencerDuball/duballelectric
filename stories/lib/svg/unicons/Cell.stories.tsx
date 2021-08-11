import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Cell, CellPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args: CellPropsI) => (
  <Box display="flex" gap="20px">
    <Cell {...args} />
    <Cell {...args} fill="red.500" />
    <Cell {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
