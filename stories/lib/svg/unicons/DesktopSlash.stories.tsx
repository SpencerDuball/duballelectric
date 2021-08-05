import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DesktopSlash, DesktopSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DesktopSlash",
  component: DesktopSlash,
} as ComponentMeta<typeof DesktopSlash>;

const Template: ComponentStory<typeof DesktopSlash> = (
  args: DesktopSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <DesktopSlash {...args} />
    <DesktopSlash {...args} fill="red.500" />
    <DesktopSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
