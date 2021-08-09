import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowDownRight, ArrowDownRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowDownRight",
  component: ArrowDownRight,
} as ComponentMeta<typeof ArrowDownRight>;

const Template: ComponentStory<typeof ArrowDownRight> = (
  args: ArrowDownRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowDownRight {...args} />
    <ArrowDownRight {...args} fill="red.500" />
    <ArrowDownRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
