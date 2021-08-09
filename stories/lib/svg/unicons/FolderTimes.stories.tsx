import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderTimes, FolderTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderTimes",
  component: FolderTimes,
} as ComponentMeta<typeof FolderTimes>;

const Template: ComponentStory<typeof FolderTimes> = (
  args: FolderTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderTimes {...args} />
    <FolderTimes {...args} fill="red.500" />
    <FolderTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
