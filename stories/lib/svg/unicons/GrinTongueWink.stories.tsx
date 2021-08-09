import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GrinTongueWink, GrinTongueWinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GrinTongueWink",
  component: GrinTongueWink,
} as ComponentMeta<typeof GrinTongueWink>;

const Template: ComponentStory<typeof GrinTongueWink> = (
  args: GrinTongueWinkPropsI
) => (
  <x.div display="flex" gap="20px">
    <GrinTongueWink {...args} />
    <GrinTongueWink {...args} fill="red.500" />
    <GrinTongueWink {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
