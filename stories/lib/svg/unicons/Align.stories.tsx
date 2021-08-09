import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Align, AlignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Align",
  component: Align,
} as ComponentMeta<typeof Align>;

const Template: ComponentStory<typeof Align> = (args: AlignPropsI) => (
  <x.div display="flex" gap="20px">
    <Align {...args} />
    <Align {...args} fill="red.500" />
    <Align {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
