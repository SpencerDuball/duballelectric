import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Hunting, HuntingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Hunting",
  component: Hunting,
} as ComponentMeta<typeof Hunting>;

const Template: ComponentStory<typeof Hunting> = (args: HuntingPropsI) => (
  <x.div display="flex" gap="20px">
    <Hunting {...args} />
    <Hunting {...args} fill="red.500" />
    <Hunting {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
