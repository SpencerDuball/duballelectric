import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudQuestion, CloudQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudQuestion",
  component: CloudQuestion,
} as ComponentMeta<typeof CloudQuestion>;

const Template: ComponentStory<typeof CloudQuestion> = (
  args: CloudQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudQuestion {...args} />
    <CloudQuestion {...args} fill="red.500" />
    <CloudQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
