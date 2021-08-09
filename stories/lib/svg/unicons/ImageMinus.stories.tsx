import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageMinus, ImageMinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageMinus",
  component: ImageMinus,
} as ComponentMeta<typeof ImageMinus>;

const Template: ComponentStory<typeof ImageMinus> = (
  args: ImageMinusPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageMinus {...args} />
    <ImageMinus {...args} fill="red.500" />
    <ImageMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
