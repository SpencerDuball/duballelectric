import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ScrollH, ScrollHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ScrollH",
  component: ScrollH,
} as ComponentMeta<typeof ScrollH>;

const Template: ComponentStory<typeof ScrollH> = (args: ScrollHPropsI) => (
  <x.div display="flex" gap="20px">
    <ScrollH {...args} />
    <ScrollH {...args} fill="red.500" />
    <ScrollH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
