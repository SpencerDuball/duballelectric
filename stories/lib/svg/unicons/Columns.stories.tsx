import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Columns, ColumnsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Columns",
  component: Columns,
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args: ColumnsPropsI) => (
  <Box display="flex" gap="20px">
    <Columns {...args} />
    <Columns {...args} fill="red.500" />
    <Columns {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
