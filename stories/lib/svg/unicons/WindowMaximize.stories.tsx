import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WindowMaximize, WindowMaximizePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WindowMaximize",
  component: WindowMaximize,
} as ComponentMeta<typeof WindowMaximize>;

const Template: ComponentStory<typeof WindowMaximize> = (
  args: WindowMaximizePropsI
) => (
  <x.div display="flex" gap="20px">
    <WindowMaximize {...args} />
    <WindowMaximize {...args} fill="red.500" />
    <WindowMaximize {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
