import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderQuestion, FolderQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderQuestion",
  component: FolderQuestion,
} as ComponentMeta<typeof FolderQuestion>;

const Template: ComponentStory<typeof FolderQuestion> = (
  args: FolderQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderQuestion {...args} />
    <FolderQuestion {...args} fill="red.500" />
    <FolderQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
