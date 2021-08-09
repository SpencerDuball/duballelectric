import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowToRight, ArrowToRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowToRight",
  component: ArrowToRight,
} as ComponentMeta<typeof ArrowToRight>;

const Template: ComponentStory<typeof ArrowToRight> = (
  args: ArrowToRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowToRight {...args} />
    <ArrowToRight {...args} fill="red.500" />
    <ArrowToRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
