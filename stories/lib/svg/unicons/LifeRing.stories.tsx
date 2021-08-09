import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LifeRing, LifeRingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LifeRing",
  component: LifeRing,
} as ComponentMeta<typeof LifeRing>;

const Template: ComponentStory<typeof LifeRing> = (args: LifeRingPropsI) => (
  <x.div display="flex" gap="20px">
    <LifeRing {...args} />
    <LifeRing {...args} fill="red.500" />
    <LifeRing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
