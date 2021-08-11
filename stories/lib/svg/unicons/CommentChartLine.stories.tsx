import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CommentChartLine, CommentChartLinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentChartLine",
  component: CommentChartLine,
} as ComponentMeta<typeof CommentChartLine>;

const Template: ComponentStory<typeof CommentChartLine> = (
  args: CommentChartLinePropsI
) => (
  <Box display="flex" gap="20px">
    <CommentChartLine {...args} />
    <CommentChartLine {...args} fill="red.500" />
    <CommentChartLine {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
