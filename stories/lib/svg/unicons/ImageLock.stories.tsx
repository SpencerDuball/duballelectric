import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageLock, ImageLockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageLock",
  component: ImageLock,
} as ComponentMeta<typeof ImageLock>;

const Template: ComponentStory<typeof ImageLock> = (args: ImageLockPropsI) => (
  <x.div display="flex" gap="20px">
    <ImageLock {...args} />
    <ImageLock {...args} fill="red.500" />
    <ImageLock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
