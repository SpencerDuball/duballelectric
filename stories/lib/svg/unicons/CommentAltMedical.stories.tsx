import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltMedical, CommentAltMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltMedical",
  component: CommentAltMedical,
} as ComponentMeta<typeof CommentAltMedical>;

const Template: ComponentStory<typeof CommentAltMedical> = (
  args: CommentAltMedicalPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltMedical {...args} />
    <CommentAltMedical {...args} fill="red.500" />
    <CommentAltMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
