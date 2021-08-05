import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudUpload, CloudUploadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudUpload",
  component: CloudUpload,
} as ComponentMeta<typeof CloudUpload>;

const Template: ComponentStory<typeof CloudUpload> = (
  args: CloudUploadPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudUpload {...args} />
    <CloudUpload {...args} fill="red.500" />
    <CloudUpload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
