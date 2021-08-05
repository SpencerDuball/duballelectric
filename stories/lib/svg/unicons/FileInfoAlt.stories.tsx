import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileInfoAlt, FileInfoAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileInfoAlt",
  component: FileInfoAlt,
} as ComponentMeta<typeof FileInfoAlt>;

const Template: ComponentStory<typeof FileInfoAlt> = (
  args: FileInfoAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileInfoAlt {...args} />
    <FileInfoAlt {...args} fill="red.500" />
    <FileInfoAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
