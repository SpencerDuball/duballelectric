import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PhoneTimes, PhoneTimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PhoneTimes",
  component: PhoneTimes,
} as ComponentMeta<typeof PhoneTimes>;

const Template: ComponentStory<typeof PhoneTimes> = (
  args: PhoneTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <PhoneTimes {...args} />
    <PhoneTimes {...args} fill="red.500" />
    <PhoneTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
