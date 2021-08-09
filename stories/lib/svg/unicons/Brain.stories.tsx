import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Brain, BrainPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Brain",
  component: Brain,
} as ComponentMeta<typeof Brain>;

const Template: ComponentStory<typeof Brain> = (args: BrainPropsI) => (
  <x.div display="flex" gap="20px">
    <Brain {...args} />
    <Brain {...args} fill="red.500" />
    <Brain {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
