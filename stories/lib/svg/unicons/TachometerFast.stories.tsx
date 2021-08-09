import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TachometerFast, TachometerFastPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TachometerFast",
  component: TachometerFast,
} as ComponentMeta<typeof TachometerFast>;

const Template: ComponentStory<typeof TachometerFast> = (
  args: TachometerFastPropsI
) => (
  <x.div display="flex" gap="20px">
    <TachometerFast {...args} />
    <TachometerFast {...args} fill="red.500" />
    <TachometerFast {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
