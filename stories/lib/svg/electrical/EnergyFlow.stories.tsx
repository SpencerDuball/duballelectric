import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnergyFlow, EnergyFlowPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/EnergyFlow",
  component: EnergyFlow,
} as ComponentMeta<typeof EnergyFlow>;

const Template: ComponentStory<typeof EnergyFlow> = (
  args: EnergyFlowPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnergyFlow {...args} />
    <EnergyFlow {...args} fill="red.500" />
    <EnergyFlow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
