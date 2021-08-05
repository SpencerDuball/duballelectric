import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowCircleUp, ArrowCircleUpPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ArrowCircleUp",
  component: ArrowCircleUp,
} as ComponentMeta<typeof ArrowCircleUp>;

const Template: ComponentStory<typeof ArrowCircleUp> = (
  args: ArrowCircleUpPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowCircleUp {...args} />
    <ArrowCircleUp {...args} fill="red.500" />
    <ArrowCircleUp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
