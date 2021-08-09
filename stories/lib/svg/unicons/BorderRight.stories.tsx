import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderRight, BorderRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderRight",
  component: BorderRight,
} as ComponentMeta<typeof BorderRight>;

const Template: ComponentStory<typeof BorderRight> = (
  args: BorderRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderRight {...args} />
    <BorderRight {...args} fill="red.500" />
    <BorderRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
