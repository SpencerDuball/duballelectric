import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Table, TablePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: TablePropsI) => (
  <Box display="flex" gap="20px">
    <Table {...args} />
    <Table {...args} fill="red.500" />
    <Table {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
