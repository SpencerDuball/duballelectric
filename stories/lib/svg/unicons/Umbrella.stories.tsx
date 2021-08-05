import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Umbrella, UmbrellaPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Umbrella",
  component: Umbrella,
} as ComponentMeta<typeof Umbrella>;

const Template: ComponentStory<typeof Umbrella> = (args: UmbrellaPropsI) => (
  <x.div display="flex" gap="20px">
    <Umbrella {...args} />
    <Umbrella {...args} fill="red.500" />
    <Umbrella {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
