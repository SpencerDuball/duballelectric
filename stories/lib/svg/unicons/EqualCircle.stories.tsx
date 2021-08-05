import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EqualCircle, EqualCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EqualCircle",
  component: EqualCircle,
} as ComponentMeta<typeof EqualCircle>;

const Template: ComponentStory<typeof EqualCircle> = (
  args: EqualCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <EqualCircle {...args} />
    <EqualCircle {...args} fill="red.500" />
    <EqualCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
