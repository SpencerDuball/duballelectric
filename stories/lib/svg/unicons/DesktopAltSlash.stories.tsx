import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DesktopAltSlash, DesktopAltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DesktopAltSlash",
  component: DesktopAltSlash,
} as ComponentMeta<typeof DesktopAltSlash>;

const Template: ComponentStory<typeof DesktopAltSlash> = (
  args: DesktopAltSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <DesktopAltSlash {...args} />
    <DesktopAltSlash {...args} fill="red.500" />
    <DesktopAltSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
