import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { File, FilePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/File",
  component: File,
} as ComponentMeta<typeof File>;

const Template: ComponentStory<typeof File> = (args: FilePropsI) => (
  <x.div display="flex" gap="20px">
    <File {...args} />
    <File {...args} fill="red.500" />
    <File {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
