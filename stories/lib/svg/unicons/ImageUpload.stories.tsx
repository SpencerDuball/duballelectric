import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageUpload, ImageUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageUpload",
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (
  args: ImageUploadPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageUpload {...args} />
    <ImageUpload {...args} fill="red.500" />
    <ImageUpload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
