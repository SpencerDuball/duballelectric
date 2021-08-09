import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignJustify, AlignJustifyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignJustify",
  component: AlignJustify,
} as ComponentMeta<typeof AlignJustify>;

const Template: ComponentStory<typeof AlignJustify> = (
  args: AlignJustifyPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignJustify {...args} />
    <AlignJustify {...args} fill="red.500" />
    <AlignJustify {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
