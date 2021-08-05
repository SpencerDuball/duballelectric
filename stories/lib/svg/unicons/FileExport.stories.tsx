import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileExport, FileExportPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileExport",
  component: FileExport,
} as ComponentMeta<typeof FileExport>;

const Template: ComponentStory<typeof FileExport> = (
  args: FileExportPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileExport {...args} />
    <FileExport {...args} fill="red.500" />
    <FileExport {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
