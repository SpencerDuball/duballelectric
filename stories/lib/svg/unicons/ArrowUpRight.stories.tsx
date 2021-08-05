import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowUpRight, ArrowUpRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowUpRight",
  component: ArrowUpRight,
} as ComponentMeta<typeof ArrowUpRight>;

const Template: ComponentStory<typeof ArrowUpRight> = (
  args: ArrowUpRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowUpRight {...args} />
    <ArrowUpRight {...args} fill="red.500" />
    <ArrowUpRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
