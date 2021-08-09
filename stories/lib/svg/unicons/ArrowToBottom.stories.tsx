import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowToBottom, ArrowToBottomPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowToBottom",
  component: ArrowToBottom,
} as ComponentMeta<typeof ArrowToBottom>;

const Template: ComponentStory<typeof ArrowToBottom> = (
  args: ArrowToBottomPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowToBottom {...args} />
    <ArrowToBottom {...args} fill="red.500" />
    <ArrowToBottom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
