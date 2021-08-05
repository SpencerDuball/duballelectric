import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sanitizer, SanitizerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sanitizer",
  component: Sanitizer,
} as ComponentMeta<typeof Sanitizer>;

const Template: ComponentStory<typeof Sanitizer> = (args: SanitizerPropsI) => (
  <x.div display="flex" gap="20px">
    <Sanitizer {...args} />
    <Sanitizer {...args} fill="red.500" />
    <Sanitizer {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
