import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileLandscape, FileLandscapePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileLandscape",
  component: FileLandscape,
} as ComponentMeta<typeof FileLandscape>;

const Template: ComponentStory<typeof FileLandscape> = (
  args: FileLandscapePropsI
) => (
  <x.div display="flex" gap="20px">
    <FileLandscape {...args} />
    <FileLandscape {...args} fill="red.500" />
    <FileLandscape {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
