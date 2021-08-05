import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SadDizzy, SadDizzyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SadDizzy",
  component: SadDizzy,
} as ComponentMeta<typeof SadDizzy>;

const Template: ComponentStory<typeof SadDizzy> = (args: SadDizzyPropsI) => (
  <x.div display="flex" gap="20px">
    <SadDizzy {...args} />
    <SadDizzy {...args} fill="red.500" />
    <SadDizzy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
