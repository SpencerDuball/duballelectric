import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bullseye, BullseyePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bullseye",
  component: Bullseye,
} as ComponentMeta<typeof Bullseye>;

const Template: ComponentStory<typeof Bullseye> = (args: BullseyePropsI) => (
  <x.div display="flex" gap="20px">
    <Bullseye {...args} />
    <Bullseye {...args} fill="red.500" />
    <Bullseye {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
