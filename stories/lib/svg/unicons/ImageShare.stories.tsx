import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageShare, ImageSharePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageShare",
  component: ImageShare,
} as ComponentMeta<typeof ImageShare>;

const Template: ComponentStory<typeof ImageShare> = (
  args: ImageSharePropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageShare {...args} />
    <ImageShare {...args} fill="red.500" />
    <ImageShare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
