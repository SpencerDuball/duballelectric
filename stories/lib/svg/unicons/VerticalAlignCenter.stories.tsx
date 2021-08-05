import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VerticalAlignCenter, VerticalAlignCenterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VerticalAlignCenter",
  component: VerticalAlignCenter,
} as ComponentMeta<typeof VerticalAlignCenter>;

const Template: ComponentStory<typeof VerticalAlignCenter> = (
  args: VerticalAlignCenterPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalAlignCenter {...args} />
    <VerticalAlignCenter {...args} fill="red.500" />
    <VerticalAlignCenter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
