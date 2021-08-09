import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsResize, ArrowsResizePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsResize",
  component: ArrowsResize,
} as ComponentMeta<typeof ArrowsResize>;

const Template: ComponentStory<typeof ArrowsResize> = (
  args: ArrowsResizePropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsResize {...args} />
    <ArrowsResize {...args} fill="red.500" />
    <ArrowsResize {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
