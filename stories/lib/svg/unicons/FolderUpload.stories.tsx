import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderUpload, FolderUploadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderUpload",
  component: FolderUpload,
} as ComponentMeta<typeof FolderUpload>;

const Template: ComponentStory<typeof FolderUpload> = (
  args: FolderUploadPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderUpload {...args} />
    <FolderUpload {...args} fill="red.500" />
    <FolderUpload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
