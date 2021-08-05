import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentAltChartLines, CommentAltChartLinesPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentAltChartLines",
  component: CommentAltChartLines,
} as ComponentMeta<typeof CommentAltChartLines>;

const Template: ComponentStory<typeof CommentAltChartLines> = (
  args: CommentAltChartLinesPropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentAltChartLines {...args} />
    <CommentAltChartLines {...args} fill="red.500" />
    <CommentAltChartLines {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
