import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentMedical, CommentMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentMedical",
  component: CommentMedical,
} as ComponentMeta<typeof CommentMedical>;

const Template: ComponentStory<typeof CommentMedical> = (
  args: CommentMedicalPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentMedical {...args} />
    <CommentMedical {...args} fill="red.500" />
    <CommentMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
