import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Glass, GlassPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Glass",
  component: Glass,
} as ComponentMeta<typeof Glass>;

const Template: ComponentStory<typeof Glass> = (args: GlassPropsI) => (
  <x.div display="flex" gap="20px">
    <Glass {...args} />
    <Glass {...args} fill="red.500" />
    <Glass {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
