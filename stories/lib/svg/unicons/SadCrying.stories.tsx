import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SadCrying, SadCryingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SadCrying",
  component: SadCrying,
} as ComponentMeta<typeof SadCrying>;

const Template: ComponentStory<typeof SadCrying> = (args: SadCryingPropsI) => (
  <x.div display="flex" gap="20px">
    <SadCrying {...args} />
    <SadCrying {...args} fill="red.500" />
    <SadCrying {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
