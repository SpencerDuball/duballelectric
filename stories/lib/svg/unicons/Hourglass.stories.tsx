import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Hourglass, HourglassPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Hourglass",
  component: Hourglass,
} as ComponentMeta<typeof Hourglass>;

const Template: ComponentStory<typeof Hourglass> = (args: HourglassPropsI) => (
  <x.div display="flex" gap="20px">
    <Hourglass {...args} />
    <Hourglass {...args} fill="red.500" />
    <Hourglass {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
