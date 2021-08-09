import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TableTennis, TableTennisPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TableTennis",
  component: TableTennis,
} as ComponentMeta<typeof TableTennis>;

const Template: ComponentStory<typeof TableTennis> = (
  args: TableTennisPropsI
) => (
  <x.div display="flex" gap="20px">
    <TableTennis {...args} />
    <TableTennis {...args} fill="red.500" />
    <TableTennis {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
