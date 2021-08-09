import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BrightnessLow, BrightnessLowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrightnessLow",
  component: BrightnessLow,
} as ComponentMeta<typeof BrightnessLow>;

const Template: ComponentStory<typeof BrightnessLow> = (
  args: BrightnessLowPropsI
) => (
  <x.div display="flex" gap="20px">
    <BrightnessLow {...args} />
    <BrightnessLow {...args} fill="red.500" />
    <BrightnessLow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
