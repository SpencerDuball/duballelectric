import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnvelopeQuestion, EnvelopeQuestionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/EnvelopeQuestion",
  component: EnvelopeQuestion,
} as ComponentMeta<typeof EnvelopeQuestion>;

const Template: ComponentStory<typeof EnvelopeQuestion> = (
  args: EnvelopeQuestionPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnvelopeQuestion {...args} />
    <EnvelopeQuestion {...args} fill="red.500" />
    <EnvelopeQuestion {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
