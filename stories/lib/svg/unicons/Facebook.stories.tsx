import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Facebook, FacebookPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Facebook",
  component: Facebook,
} as ComponentMeta<typeof Facebook>;

const Template: ComponentStory<typeof Facebook> = (args: FacebookPropsI) => (
  <x.div display="flex" gap="20px">
    <Facebook {...args} />
    <Facebook {...args} fill="red.500" />
    <Facebook {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
