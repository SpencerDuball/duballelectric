import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeyboardShow, KeyboardShowPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/KeyboardShow",
  component: KeyboardShow,
} as ComponentMeta<typeof KeyboardShow>;

const Template: ComponentStory<typeof KeyboardShow> = (
  args: KeyboardShowPropsI
) => (
  <x.div display="flex" gap="20px">
    <KeyboardShow {...args} />
    <KeyboardShow {...args} fill="red.500" />
    <KeyboardShow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
