import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CropAltRotateRight, CropAltRotateRightPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CropAltRotateRight",
  component: CropAltRotateRight,
} as ComponentMeta<typeof CropAltRotateRight>;

const Template: ComponentStory<typeof CropAltRotateRight> = (
  args: CropAltRotateRightPropsI
) => (
  <x.div display="flex" gap="20px">
    <CropAltRotateRight {...args} />
    <CropAltRotateRight {...args} fill="red.500" />
    <CropAltRotateRight {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
