import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsResizeH, ArrowsResizeHPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowsResizeH",
  component: ArrowsResizeH,
} as ComponentMeta<typeof ArrowsResizeH>;

const Template: ComponentStory<typeof ArrowsResizeH> = (
  args: ArrowsResizeHPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsResizeH {...args} />
    <ArrowsResizeH {...args} fill="red.500" />
    <ArrowsResizeH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
