import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bath, BathPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bath",
  component: Bath,
} as ComponentMeta<typeof Bath>;

const Template: ComponentStory<typeof Bath> = (args: BathPropsI) => (
  <x.div display="flex" gap="20px">
    <Bath {...args} />
    <Bath {...args} fill="red.500" />
    <Bath {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
