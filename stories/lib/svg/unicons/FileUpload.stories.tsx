import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileUpload, FileUploadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileUpload",
  component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (
  args: FileUploadPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileUpload {...args} />
    <FileUpload {...args} fill="red.500" />
    <FileUpload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
