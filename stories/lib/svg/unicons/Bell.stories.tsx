import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bell, BellPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bell",
  component: Bell,
} as ComponentMeta<typeof Bell>;

const Template: ComponentStory<typeof Bell> = (args: BellPropsI) => (
  <x.div display="flex" gap="20px">
    <Bell {...args} />
    <Bell {...args} fill="red.500" />
    <Bell {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
