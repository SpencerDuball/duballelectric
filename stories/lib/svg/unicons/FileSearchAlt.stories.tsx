import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileSearchAlt, FileSearchAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileSearchAlt",
  component: FileSearchAlt,
} as ComponentMeta<typeof FileSearchAlt>;

const Template: ComponentStory<typeof FileSearchAlt> = (
  args: FileSearchAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileSearchAlt {...args} />
    <FileSearchAlt {...args} fill="red.500" />
    <FileSearchAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
