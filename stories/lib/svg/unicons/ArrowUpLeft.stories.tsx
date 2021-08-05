import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowUpLeft, ArrowUpLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowUpLeft",
  component: ArrowUpLeft,
} as ComponentMeta<typeof ArrowUpLeft>;

const Template: ComponentStory<typeof ArrowUpLeft> = (
  args: ArrowUpLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowUpLeft {...args} />
    <ArrowUpLeft {...args} fill="red.500" />
    <ArrowUpLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
