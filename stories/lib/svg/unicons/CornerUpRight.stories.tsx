import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerUpRight, CornerUpRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerUpRight",
  component: CornerUpRight,
} as ComponentMeta<typeof CornerUpRight>;

const Template: ComponentStory<typeof CornerUpRight> = (
  args: CornerUpRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerUpRight {...args} />
    <CornerUpRight {...args} fill="red.500" />
    <CornerUpRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
