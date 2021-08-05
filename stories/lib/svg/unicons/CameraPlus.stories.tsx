import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CameraPlus, CameraPlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CameraPlus",
  component: CameraPlus,
} as ComponentMeta<typeof CameraPlus>;

const Template: ComponentStory<typeof CameraPlus> = (
  args: CameraPlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <CameraPlus {...args} />
    <CameraPlus {...args} fill="red.500" />
    <CameraPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
