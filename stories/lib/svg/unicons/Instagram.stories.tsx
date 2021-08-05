import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Instagram, InstagramPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Instagram",
  component: Instagram,
} as ComponentMeta<typeof Instagram>;

const Template: ComponentStory<typeof Instagram> = (args: InstagramPropsI) => (
  <x.div display="flex" gap="20px">
    <Instagram {...args} />
    <Instagram {...args} fill="red.500" />
    <Instagram {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
