import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileUploadAlt, FileUploadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileUploadAlt",
  component: FileUploadAlt,
} as ComponentMeta<typeof FileUploadAlt>;

const Template: ComponentStory<typeof FileUploadAlt> = (
  args: FileUploadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileUploadAlt {...args} />
    <FileUploadAlt {...args} fill="red.500" />
    <FileUploadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
