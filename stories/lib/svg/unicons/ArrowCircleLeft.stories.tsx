import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowCircleLeft, ArrowCircleLeftPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowCircleLeft",
  component: ArrowCircleLeft,
} as ComponentMeta<typeof ArrowCircleLeft>;

const Template: ComponentStory<typeof ArrowCircleLeft> = (
  args: ArrowCircleLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowCircleLeft {...args} />
    <ArrowCircleLeft {...args} fill="red.500" />
    <ArrowCircleLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
