import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BatteryEmpty, BatteryEmptyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BatteryEmpty",
  component: BatteryEmpty,
} as ComponentMeta<typeof BatteryEmpty>;

const Template: ComponentStory<typeof BatteryEmpty> = (
  args: BatteryEmptyPropsI
) => (
  <x.div display="flex" gap="20px">
    <BatteryEmpty {...args} />
    <BatteryEmpty {...args} fill="red.500" />
    <BatteryEmpty {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
