import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileCheck, FileCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileCheck",
  component: FileCheck,
} as ComponentMeta<typeof FileCheck>;

const Template: ComponentStory<typeof FileCheck> = (args: FileCheckPropsI) => (
  <x.div display="flex" gap="20px">
    <FileCheck {...args} />
    <FileCheck {...args} fill="red.500" />
    <FileCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
