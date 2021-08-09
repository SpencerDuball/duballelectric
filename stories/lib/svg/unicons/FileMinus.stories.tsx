import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileMinus, FileMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileMinus",
  component: FileMinus,
} as ComponentMeta<typeof FileMinus>;

const Template: ComponentStory<typeof FileMinus> = (args: FileMinusPropsI) => (
  <x.div display="flex" gap="20px">
    <FileMinus {...args} />
    <FileMinus {...args} fill="red.500" />
    <FileMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
