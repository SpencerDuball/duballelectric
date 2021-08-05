import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Apple, ApplePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Apple",
  component: Apple,
} as ComponentMeta<typeof Apple>;

const Template: ComponentStory<typeof Apple> = (args: ApplePropsI) => (
  <x.div display="flex" gap="20px">
    <Apple {...args} />
    <Apple {...args} fill="red.500" />
    <Apple {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
