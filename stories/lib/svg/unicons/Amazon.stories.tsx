import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Amazon, AmazonPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Amazon",
  component: Amazon,
} as ComponentMeta<typeof Amazon>;

const Template: ComponentStory<typeof Amazon> = (args: AmazonPropsI) => (
  <x.div display="flex" gap="20px">
    <Amazon {...args} />
    <Amazon {...args} fill="red.500" />
    <Amazon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
