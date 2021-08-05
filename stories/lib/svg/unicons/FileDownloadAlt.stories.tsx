import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileDownloadAlt, FileDownloadAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileDownloadAlt",
  component: FileDownloadAlt,
} as ComponentMeta<typeof FileDownloadAlt>;

const Template: ComponentStory<typeof FileDownloadAlt> = (
  args: FileDownloadAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileDownloadAlt {...args} />
    <FileDownloadAlt {...args} fill="red.500" />
    <FileDownloadAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
