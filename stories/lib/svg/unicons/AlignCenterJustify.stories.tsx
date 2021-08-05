import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignCenterJustify, AlignCenterJustifyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AlignCenterJustify",
  component: AlignCenterJustify,
} as ComponentMeta<typeof AlignCenterJustify>;

const Template: ComponentStory<typeof AlignCenterJustify> = (
  args: AlignCenterJustifyPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignCenterJustify {...args} />
    <AlignCenterJustify {...args} fill="red.500" />
    <AlignCenterJustify {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
