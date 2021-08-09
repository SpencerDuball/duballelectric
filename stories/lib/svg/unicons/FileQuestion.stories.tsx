import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileQuestion, FileQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileQuestion",
  component: FileQuestion,
} as ComponentMeta<typeof FileQuestion>;

const Template: ComponentStory<typeof FileQuestion> = (
  args: FileQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileQuestion {...args} />
    <FileQuestion {...args} fill="red.500" />
    <FileQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
