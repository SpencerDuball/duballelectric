import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignLeftJustify, AlignLeftJustifyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AlignLeftJustify",
  component: AlignLeftJustify,
} as ComponentMeta<typeof AlignLeftJustify>;

const Template: ComponentStory<typeof AlignLeftJustify> = (
  args: AlignLeftJustifyPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignLeftJustify {...args} />
    <AlignLeftJustify {...args} fill="red.500" />
    <AlignLeftJustify {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
