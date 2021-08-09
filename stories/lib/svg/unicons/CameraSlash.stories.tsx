import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CameraSlash, CameraSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CameraSlash",
  component: CameraSlash,
} as ComponentMeta<typeof CameraSlash>;

const Template: ComponentStory<typeof CameraSlash> = (
  args: CameraSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <CameraSlash {...args} />
    <CameraSlash {...args} fill="red.500" />
    <CameraSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
