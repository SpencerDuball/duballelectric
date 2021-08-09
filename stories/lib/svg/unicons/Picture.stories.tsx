import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Picture, PicturePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Picture",
  component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args: PicturePropsI) => (
  <x.div display="flex" gap="20px">
    <Picture {...args} />
    <Picture {...args} fill="red.500" />
    <Picture {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
