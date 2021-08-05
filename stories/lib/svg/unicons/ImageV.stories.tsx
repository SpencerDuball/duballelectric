import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageV, ImageVPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageV",
  component: ImageV,
} as ComponentMeta<typeof ImageV>;

const Template: ComponentStory<typeof ImageV> = (args: ImageVPropsI) => (
  <x.div display="flex" gap="20px">
    <ImageV {...args} />
    <ImageV {...args} fill="red.500" />
    <ImageV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
