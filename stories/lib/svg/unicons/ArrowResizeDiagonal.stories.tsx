import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowResizeDiagonal, ArrowResizeDiagonalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowResizeDiagonal",
  component: ArrowResizeDiagonal,
} as ComponentMeta<typeof ArrowResizeDiagonal>;

const Template: ComponentStory<typeof ArrowResizeDiagonal> = (
  args: ArrowResizeDiagonalPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowResizeDiagonal {...args} />
    <ArrowResizeDiagonal {...args} fill="red.500" />
    <ArrowResizeDiagonal {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
