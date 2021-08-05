import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Camera, CameraPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Camera",
  component: Camera,
} as ComponentMeta<typeof Camera>;

const Template: ComponentStory<typeof Camera> = (args: CameraPropsI) => (
  <x.div display="flex" gap="20px">
    <Camera {...args} />
    <Camera {...args} fill="red.500" />
    <Camera {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
