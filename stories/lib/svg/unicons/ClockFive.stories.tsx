import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClockFive, ClockFivePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClockFive",
  component: ClockFive,
} as ComponentMeta<typeof ClockFive>;

const Template: ComponentStory<typeof ClockFive> = (args: ClockFivePropsI) => (
  <x.div display="flex" gap="20px">
    <ClockFive {...args} />
    <ClockFive {...args} fill="red.500" />
    <ClockFive {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
