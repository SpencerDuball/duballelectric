import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Keyboard, KeyboardPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Keyboard",
  component: Keyboard,
} as ComponentMeta<typeof Keyboard>;

const Template: ComponentStory<typeof Keyboard> = (args: KeyboardPropsI) => (
  <x.div display="flex" gap="20px">
    <Keyboard {...args} />
    <Keyboard {...args} fill="red.500" />
    <Keyboard {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
