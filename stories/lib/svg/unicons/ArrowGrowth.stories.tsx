import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowGrowth, ArrowGrowthPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowGrowth",
  component: ArrowGrowth,
} as ComponentMeta<typeof ArrowGrowth>;

const Template: ComponentStory<typeof ArrowGrowth> = (
  args: ArrowGrowthPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowGrowth {...args} />
    <ArrowGrowth {...args} fill="red.500" />
    <ArrowGrowth {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
