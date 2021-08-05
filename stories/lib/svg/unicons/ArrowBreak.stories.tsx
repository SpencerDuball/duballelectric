import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowBreak, ArrowBreakPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowBreak",
  component: ArrowBreak,
} as ComponentMeta<typeof ArrowBreak>;

const Template: ComponentStory<typeof ArrowBreak> = (
  args: ArrowBreakPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowBreak {...args} />
    <ArrowBreak {...args} fill="red.500" />
    <ArrowBreak {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
