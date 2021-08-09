import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Boomtruck, BoomtruckPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Boomtruck",
  component: Boomtruck,
} as ComponentMeta<typeof Boomtruck>;

const Template: ComponentStory<typeof Boomtruck> = (args: BoomtruckPropsI) => (
  <x.div display="flex" gap="20px">
    <Boomtruck {...args} />
    <Boomtruck {...args} fill="red.500" />
    <Boomtruck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
