import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileCopyAlt, FileCopyAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileCopyAlt",
  component: FileCopyAlt,
} as ComponentMeta<typeof FileCopyAlt>;

const Template: ComponentStory<typeof FileCopyAlt> = (
  args: FileCopyAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileCopyAlt {...args} />
    <FileCopyAlt {...args} fill="red.500" />
    <FileCopyAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
