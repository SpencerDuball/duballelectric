import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CaretRight, CaretRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CaretRight",
  component: CaretRight,
} as ComponentMeta<typeof CaretRight>;

const Template: ComponentStory<typeof CaretRight> = (
  args: CaretRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <CaretRight {...args} />
    <CaretRight {...args} fill="red.500" />
    <CaretRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
