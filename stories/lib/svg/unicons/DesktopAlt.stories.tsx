import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DesktopAlt, DesktopAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DesktopAlt",
  component: DesktopAlt,
} as ComponentMeta<typeof DesktopAlt>;

const Template: ComponentStory<typeof DesktopAlt> = (
  args: DesktopAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <DesktopAlt {...args} />
    <DesktopAlt {...args} fill="red.500" />
    <DesktopAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
