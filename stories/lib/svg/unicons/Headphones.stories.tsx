import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Headphones, HeadphonesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Headphones",
  component: Headphones,
} as ComponentMeta<typeof Headphones>;

const Template: ComponentStory<typeof Headphones> = (
  args: HeadphonesPropsI
) => (
  <x.div display="flex" gap="20px">
    <Headphones {...args} />
    <Headphones {...args} fill="red.500" />
    <Headphones {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
