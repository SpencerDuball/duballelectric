import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Times, TimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Times",
  component: Times,
} as ComponentMeta<typeof Times>;

const Template: ComponentStory<typeof Times> = (args: TimesPropsI) => (
  <x.div display="flex" gap="20px">
    <Times {...args} />
    <Times {...args} fill="red.500" />
    <Times {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
