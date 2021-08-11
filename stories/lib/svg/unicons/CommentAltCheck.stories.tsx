import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentAltCheck, CommentAltCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltCheck",
  component: CommentAltCheck,
} as ComponentMeta<typeof CommentAltCheck>;

const Template: ComponentStory<typeof CommentAltCheck> = (
  args: CommentAltCheckPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltCheck {...args} />
    <CommentAltCheck {...args} fill="red.500" />
    <CommentAltCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
