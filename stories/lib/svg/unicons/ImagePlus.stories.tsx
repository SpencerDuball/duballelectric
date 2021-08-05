import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImagePlus, ImagePlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImagePlus",
  component: ImagePlus,
} as ComponentMeta<typeof ImagePlus>;

const Template: ComponentStory<typeof ImagePlus> = (args: ImagePlusPropsI) => (
  <x.div display="flex" gap="20px">
    <ImagePlus {...args} />
    <ImagePlus {...args} fill="red.500" />
    <ImagePlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
