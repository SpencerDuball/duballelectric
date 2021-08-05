import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Analysis, AnalysisPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Analysis",
  component: Analysis,
} as ComponentMeta<typeof Analysis>;

const Template: ComponentStory<typeof Analysis> = (args: AnalysisPropsI) => (
  <x.div display="flex" gap="20px">
    <Analysis {...args} />
    <Analysis {...args} fill="red.500" />
    <Analysis {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
