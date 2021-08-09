import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsMaximize, ArrowsMaximizePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsMaximize",
  component: ArrowsMaximize,
} as ComponentMeta<typeof ArrowsMaximize>;

const Template: ComponentStory<typeof ArrowsMaximize> = (
  args: ArrowsMaximizePropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsMaximize {...args} />
    <ArrowsMaximize {...args} fill="red.500" />
    <ArrowsMaximize {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
