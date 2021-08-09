import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageAltSlash, ImageAltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageAltSlash",
  component: ImageAltSlash,
} as ComponentMeta<typeof ImageAltSlash>;

const Template: ComponentStory<typeof ImageAltSlash> = (
  args: ImageAltSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageAltSlash {...args} />
    <ImageAltSlash {...args} fill="red.500" />
    <ImageAltSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
