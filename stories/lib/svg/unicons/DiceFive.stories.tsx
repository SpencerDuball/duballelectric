import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceFive, DiceFivePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DiceFive",
  component: DiceFive,
} as ComponentMeta<typeof DiceFive>;

const Template: ComponentStory<typeof DiceFive> = (args: DiceFivePropsI) => (
  <x.div display="flex" gap="20px">
    <DiceFive {...args} />
    <DiceFive {...args} fill="red.500" />
    <DiceFive {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
