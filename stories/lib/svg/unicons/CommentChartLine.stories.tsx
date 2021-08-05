import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CommentChartLine, CommentChartLinePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CommentChartLine",
  component: CommentChartLine,
} as ComponentMeta<typeof CommentChartLine>;

const Template: ComponentStory<typeof CommentChartLine> = (
  args: CommentChartLinePropsI
) => (
  <x.div display="flex" gap="20px">
    <CommentChartLine {...args} />
    <CommentChartLine {...args} fill="red.500" />
    <CommentChartLine {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
