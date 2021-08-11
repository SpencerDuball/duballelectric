import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import {
  CommentAltChartLines,
  CommentAltChartLinesPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CommentAltChartLines",
  component: CommentAltChartLines,
} as ComponentMeta<typeof CommentAltChartLines>;

const Template: ComponentStory<typeof CommentAltChartLines> = (
  args: CommentAltChartLinesPropsI
) => (
  <Box display="flex" gap="20px">
    <CommentAltChartLines {...args} />
    <CommentAltChartLines {...args} fill="red.500" />
    <CommentAltChartLines {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
