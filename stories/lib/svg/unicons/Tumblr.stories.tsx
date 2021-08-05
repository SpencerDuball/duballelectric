import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tumblr, TumblrPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tumblr",
  component: Tumblr,
} as ComponentMeta<typeof Tumblr>;

const Template: ComponentStory<typeof Tumblr> = (args: TumblrPropsI) => (
  <x.div display="flex" gap="20px">
    <Tumblr {...args} />
    <Tumblr {...args} fill="red.500" />
    <Tumblr {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
