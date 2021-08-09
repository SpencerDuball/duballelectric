import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HighVoltage, HighVoltagePropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/HighVoltage",
  component: HighVoltage,
} as ComponentMeta<typeof HighVoltage>;

const Template: ComponentStory<typeof HighVoltage> = (
  args: HighVoltagePropsI
) => (
  <x.div display="flex" gap="20px">
    <HighVoltage {...args} />
    <HighVoltage {...args} fill="red.500" />
    <HighVoltage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
