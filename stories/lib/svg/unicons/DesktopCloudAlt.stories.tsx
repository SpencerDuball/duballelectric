import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DesktopCloudAlt, DesktopCloudAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DesktopCloudAlt",
  component: DesktopCloudAlt,
} as ComponentMeta<typeof DesktopCloudAlt>;

const Template: ComponentStory<typeof DesktopCloudAlt> = (
  args: DesktopCloudAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <DesktopCloudAlt {...args} />
    <DesktopCloudAlt {...args} fill="red.500" />
    <DesktopCloudAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
