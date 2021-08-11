import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnvelopeQuestion, EnvelopeQuestionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EnvelopeQuestion",
  component: EnvelopeQuestion,
} as ComponentMeta<typeof EnvelopeQuestion>;

const Template: ComponentStory<typeof EnvelopeQuestion> = (
  args: EnvelopeQuestionPropsI
) => (
  <Box display="flex" gap="20px">
    <EnvelopeQuestion {...args} />
    <EnvelopeQuestion {...args} fill="red.500" />
    <EnvelopeQuestion {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
