import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowDownLeft, ArrowDownLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowDownLeft",
  component: ArrowDownLeft,
} as ComponentMeta<typeof ArrowDownLeft>;

const Template: ComponentStory<typeof ArrowDownLeft> = (
  args: ArrowDownLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowDownLeft {...args} />
    <ArrowDownLeft {...args} fill="red.500" />
    <ArrowDownLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
