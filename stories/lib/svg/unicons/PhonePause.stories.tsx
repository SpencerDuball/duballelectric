import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PhonePause, PhonePausePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PhonePause",
  component: PhonePause,
} as ComponentMeta<typeof PhonePause>;

const Template: ComponentStory<typeof PhonePause> = (
  args: PhonePausePropsI
) => (
  <x.div display="flex" gap="20px">
    <PhonePause {...args} />
    <PhonePause {...args} fill="red.500" />
    <PhonePause {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
