import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowCircleRight, ArrowCircleRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowCircleRight",
  component: ArrowCircleRight,
} as ComponentMeta<typeof ArrowCircleRight>;

const Template: ComponentStory<typeof ArrowCircleRight> = (
  args: ArrowCircleRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowCircleRight {...args} />
    <ArrowCircleRight {...args} fill="red.500" />
    <ArrowCircleRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
