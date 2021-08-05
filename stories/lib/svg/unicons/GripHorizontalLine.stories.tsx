import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GripHorizontalLine, GripHorizontalLinePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/GripHorizontalLine",
  component: GripHorizontalLine,
} as ComponentMeta<typeof GripHorizontalLine>;

const Template: ComponentStory<typeof GripHorizontalLine> = (
  args: GripHorizontalLinePropsI
) => (
  <x.div display="flex" gap="20px">
    <GripHorizontalLine {...args} />
    <GripHorizontalLine {...args} fill="red.500" />
    <GripHorizontalLine {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
