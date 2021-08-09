import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StopwatchSlash, StopwatchSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/StopwatchSlash",
  component: StopwatchSlash,
} as ComponentMeta<typeof StopwatchSlash>;

const Template: ComponentStory<typeof StopwatchSlash> = (
  args: StopwatchSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <StopwatchSlash {...args} />
    <StopwatchSlash {...args} fill="red.500" />
    <StopwatchSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
