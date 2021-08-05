import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BatteryBolt, BatteryBoltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BatteryBolt",
  component: BatteryBolt,
} as ComponentMeta<typeof BatteryBolt>;

const Template: ComponentStory<typeof BatteryBolt> = (
  args: BatteryBoltPropsI
) => (
  <x.div display="flex" gap="20px">
    <BatteryBolt {...args} />
    <BatteryBolt {...args} fill="red.500" />
    <BatteryBolt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
