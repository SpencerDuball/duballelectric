import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudTimes, CloudTimesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudTimes",
  component: CloudTimes,
} as ComponentMeta<typeof CloudTimes>;

const Template: ComponentStory<typeof CloudTimes> = (
  args: CloudTimesPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudTimes {...args} />
    <CloudTimes {...args} fill="red.500" />
    <CloudTimes {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
