import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsShrinkH, ArrowsShrinkHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsShrinkH",
  component: ArrowsShrinkH,
} as ComponentMeta<typeof ArrowsShrinkH>;

const Template: ComponentStory<typeof ArrowsShrinkH> = (
  args: ArrowsShrinkHPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsShrinkH {...args} />
    <ArrowsShrinkH {...args} fill="red.500" />
    <ArrowsShrinkH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
