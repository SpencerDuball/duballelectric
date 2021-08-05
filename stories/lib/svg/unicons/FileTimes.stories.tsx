import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileTimes, FileTimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileTimes",
  component: FileTimes,
} as ComponentMeta<typeof FileTimes>;

const Template: ComponentStory<typeof FileTimes> = (args: FileTimesPropsI) => (
  <x.div display="flex" gap="20px">
    <FileTimes {...args} />
    <FileTimes {...args} fill="red.500" />
    <FileTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
