import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileMinusAlt, FileMinusAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileMinusAlt",
  component: FileMinusAlt,
} as ComponentMeta<typeof FileMinusAlt>;

const Template: ComponentStory<typeof FileMinusAlt> = (
  args: FileMinusAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileMinusAlt {...args} />
    <FileMinusAlt {...args} fill="red.500" />
    <FileMinusAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
