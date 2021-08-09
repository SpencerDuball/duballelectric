import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ListUl, ListUlPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ListUl",
  component: ListUl,
} as ComponentMeta<typeof ListUl>;

const Template: ComponentStory<typeof ListUl> = (args: ListUlPropsI) => (
  <x.div display="flex" gap="20px">
    <ListUl {...args} />
    <ListUl {...args} fill="red.500" />
    <ListUl {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
