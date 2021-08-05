import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudDownload, CloudDownloadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudDownload",
  component: CloudDownload,
} as ComponentMeta<typeof CloudDownload>;

const Template: ComponentStory<typeof CloudDownload> = (
  args: CloudDownloadPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudDownload {...args} />
    <CloudDownload {...args} fill="red.500" />
    <CloudDownload {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
