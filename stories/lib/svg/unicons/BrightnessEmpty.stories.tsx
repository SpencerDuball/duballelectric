import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BrightnessEmpty, BrightnessEmptyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BrightnessEmpty",
  component: BrightnessEmpty,
} as ComponentMeta<typeof BrightnessEmpty>;

const Template: ComponentStory<typeof BrightnessEmpty> = (
  args: BrightnessEmptyPropsI
) => (
  <x.div display="flex" gap="20px">
    <BrightnessEmpty {...args} />
    <BrightnessEmpty {...args} fill="red.500" />
    <BrightnessEmpty {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
