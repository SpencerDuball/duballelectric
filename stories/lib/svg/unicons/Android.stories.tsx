import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Android, AndroidPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Android",
  component: Android,
} as ComponentMeta<typeof Android>;

const Template: ComponentStory<typeof Android> = (args: AndroidPropsI) => (
  <x.div display="flex" gap="20px">
    <Android {...args} />
    <Android {...args} fill="red.500" />
    <Android {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
