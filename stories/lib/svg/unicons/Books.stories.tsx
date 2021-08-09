import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Books, BooksPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Books",
  component: Books,
} as ComponentMeta<typeof Books>;

const Template: ComponentStory<typeof Books> = (args: BooksPropsI) => (
  <x.div display="flex" gap="20px">
    <Books {...args} />
    <Books {...args} fill="red.500" />
    <Books {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
