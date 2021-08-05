import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignRight, SignRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SignRight",
  component: SignRight,
} as ComponentMeta<typeof SignRight>;

const Template: ComponentStory<typeof SignRight> = (args: SignRightPropsI) => (
  <x.div display="flex" gap="20px">
    <SignRight {...args} />
    <SignRight {...args} fill="red.500" />
    <SignRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
