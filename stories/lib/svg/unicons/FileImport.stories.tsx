import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileImport, FileImportPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileImport",
  component: FileImport,
} as ComponentMeta<typeof FileImport>;

const Template: ComponentStory<typeof FileImport> = (
  args: FileImportPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileImport {...args} />
    <FileImport {...args} fill="red.500" />
    <FileImport {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
