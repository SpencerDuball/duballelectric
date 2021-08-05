import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Feedback, FeedbackPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Feedback",
  component: Feedback,
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = (args: FeedbackPropsI) => (
  <x.div display="flex" gap="20px">
    <Feedback {...args} />
    <Feedback {...args} fill="red.500" />
    <Feedback {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
