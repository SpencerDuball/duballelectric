import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ScalingRight, ScalingRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ScalingRight",
  component: ScalingRight,
} as ComponentMeta<typeof ScalingRight>;

const Template: ComponentStory<typeof ScalingRight> = (
  args: ScalingRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ScalingRight {...args} />
    <ScalingRight {...args} fill="red.500" />
    <ScalingRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
