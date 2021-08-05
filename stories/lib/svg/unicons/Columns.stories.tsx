import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Columns, ColumnsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Columns",
  component: Columns,
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args: ColumnsPropsI) => (
  <x.div display="flex" gap="20px">
    <Columns {...args} />
    <Columns {...args} fill="red.500" />
    <Columns {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
