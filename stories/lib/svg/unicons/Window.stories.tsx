import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Window, WindowPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Window",
  component: Window,
} as ComponentMeta<typeof Window>;

const Template: ComponentStory<typeof Window> = (args: WindowPropsI) => (
  <x.div display="flex" gap="20px">
    <Window {...args} />
    <Window {...args} fill="red.500" />
    <Window {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
