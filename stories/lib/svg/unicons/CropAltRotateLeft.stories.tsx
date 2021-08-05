import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CropAltRotateLeft, CropAltRotateLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CropAltRotateLeft",
  component: CropAltRotateLeft,
} as ComponentMeta<typeof CropAltRotateLeft>;

const Template: ComponentStory<typeof CropAltRotateLeft> = (
  args: CropAltRotateLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <CropAltRotateLeft {...args} />
    <CropAltRotateLeft {...args} fill="red.500" />
    <CropAltRotateLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
