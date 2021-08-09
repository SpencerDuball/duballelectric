import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Cell, CellPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args: CellPropsI) => (
  <x.div display="flex" gap="20px">
    <Cell {...args} />
    <Cell {...args} fill="red.500" />
    <Cell {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
