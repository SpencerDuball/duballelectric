import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Gold, GoldPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Gold",
  component: Gold,
} as ComponentMeta<typeof Gold>;

const Template: ComponentStory<typeof Gold> = (args: GoldPropsI) => (
  <x.div display="flex" gap="20px">
    <Gold {...args} />
    <Gold {...args} fill="red.500" />
    <Gold {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
