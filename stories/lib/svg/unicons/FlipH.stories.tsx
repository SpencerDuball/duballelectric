import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FlipH, FlipHPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FlipH",
  component: FlipH,
} as ComponentMeta<typeof FlipH>;

const Template: ComponentStory<typeof FlipH> = (args: FlipHPropsI) => (
  <x.div display="flex" gap="20px">
    <FlipH {...args} />
    <FlipH {...args} fill="red.500" />
    <FlipH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
