import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Upload, UploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Upload",
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args: UploadPropsI) => (
  <x.div display="flex" gap="20px">
    <Upload {...args} />
    <Upload {...args} fill="red.500" />
    <Upload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
