import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowCircleDown, ArrowCircleDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowCircleDown",
  component: ArrowCircleDown,
} as ComponentMeta<typeof ArrowCircleDown>;

const Template: ComponentStory<typeof ArrowCircleDown> = (
  args: ArrowCircleDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowCircleDown {...args} />
    <ArrowCircleDown {...args} fill="red.500" />
    <ArrowCircleDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
