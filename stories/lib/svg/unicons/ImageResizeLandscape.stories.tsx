import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageResizeLandscape, ImageResizeLandscapePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageResizeLandscape",
  component: ImageResizeLandscape,
} as ComponentMeta<typeof ImageResizeLandscape>;

const Template: ComponentStory<typeof ImageResizeLandscape> = (
  args: ImageResizeLandscapePropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageResizeLandscape {...args} />
    <ImageResizeLandscape {...args} fill="red.500" />
    <ImageResizeLandscape {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
