import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BrightnessHalf, BrightnessHalfPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BrightnessHalf",
  component: BrightnessHalf,
} as ComponentMeta<typeof BrightnessHalf>;

const Template: ComponentStory<typeof BrightnessHalf> = (
  args: BrightnessHalfPropsI
) => (
  <x.div display="flex" gap="20px">
    <BrightnessHalf {...args} />
    <BrightnessHalf {...args} fill="red.500" />
    <BrightnessHalf {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
