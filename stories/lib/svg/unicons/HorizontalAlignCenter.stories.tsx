import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HorizontalAlignCenter, HorizontalAlignCenterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HorizontalAlignCenter",
  component: HorizontalAlignCenter,
} as ComponentMeta<typeof HorizontalAlignCenter>;

const Template: ComponentStory<typeof HorizontalAlignCenter> = (
  args: HorizontalAlignCenterPropsI
) => (
  <x.div display="flex" gap="20px">
    <HorizontalAlignCenter {...args} />
    <HorizontalAlignCenter {...args} fill="red.500" />
    <HorizontalAlignCenter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
