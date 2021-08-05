import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceFour, DiceFourPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DiceFour",
  component: DiceFour,
} as ComponentMeta<typeof DiceFour>;

const Template: ComponentStory<typeof DiceFour> = (args: DiceFourPropsI) => (
  <x.div display="flex" gap="20px">
    <DiceFour {...args} />
    <DiceFour {...args} fill="red.500" />
    <DiceFour {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
