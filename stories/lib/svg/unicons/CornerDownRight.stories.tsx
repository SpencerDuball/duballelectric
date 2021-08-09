import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerDownRight, CornerDownRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerDownRight",
  component: CornerDownRight,
} as ComponentMeta<typeof CornerDownRight>;

const Template: ComponentStory<typeof CornerDownRight> = (
  args: CornerDownRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerDownRight {...args} />
    <CornerDownRight {...args} fill="red.500" />
    <CornerDownRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
