import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowFromRight, ArrowFromRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowFromRight",
  component: ArrowFromRight,
} as ComponentMeta<typeof ArrowFromRight>;

const Template: ComponentStory<typeof ArrowFromRight> = (
  args: ArrowFromRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowFromRight {...args} />
    <ArrowFromRight {...args} fill="red.500" />
    <ArrowFromRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
