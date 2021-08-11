import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TableTennis, TableTennisPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TableTennis",
  component: TableTennis,
} as ComponentMeta<typeof TableTennis>;

const Template: ComponentStory<typeof TableTennis> = (
  args: TableTennisPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TableTennis {...args} />
    <TableTennis {...args} fill="red.500" />
    <TableTennis {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
