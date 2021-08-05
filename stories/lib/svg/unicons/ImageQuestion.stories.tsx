import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ImageQuestion, ImageQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ImageQuestion",
  component: ImageQuestion,
} as ComponentMeta<typeof ImageQuestion>;

const Template: ComponentStory<typeof ImageQuestion> = (
  args: ImageQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <ImageQuestion {...args} />
    <ImageQuestion {...args} fill="red.500" />
    <ImageQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
