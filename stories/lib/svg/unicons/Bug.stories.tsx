import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bug, BugPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bug",
  component: Bug,
} as ComponentMeta<typeof Bug>;

const Template: ComponentStory<typeof Bug> = (args: BugPropsI) => (
  <x.div display="flex" gap="20px">
    <Bug {...args} />
    <Bug {...args} fill="red.500" />
    <Bug {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
