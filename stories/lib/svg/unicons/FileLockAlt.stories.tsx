import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileLockAlt, FileLockAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileLockAlt",
  component: FileLockAlt,
} as ComponentMeta<typeof FileLockAlt>;

const Template: ComponentStory<typeof FileLockAlt> = (
  args: FileLockAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileLockAlt {...args} />
    <FileLockAlt {...args} fill="red.500" />
    <FileLockAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
