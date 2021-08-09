import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileLandscapeAlt, FileLandscapeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileLandscapeAlt",
  component: FileLandscapeAlt,
} as ComponentMeta<typeof FileLandscapeAlt>;

const Template: ComponentStory<typeof FileLandscapeAlt> = (
  args: FileLandscapeAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileLandscapeAlt {...args} />
    <FileLandscapeAlt {...args} fill="red.500" />
    <FileLandscapeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
