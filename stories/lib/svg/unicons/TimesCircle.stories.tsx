import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TimesCircle, TimesCirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TimesCircle",
  component: TimesCircle,
} as ComponentMeta<typeof TimesCircle>;

const Template: ComponentStory<typeof TimesCircle> = (
  args: TimesCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <TimesCircle {...args} />
    <TimesCircle {...args} fill="red.500" />
    <TimesCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
