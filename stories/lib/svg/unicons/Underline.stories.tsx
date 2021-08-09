import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Underline, UnderlinePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Underline",
  component: Underline,
} as ComponentMeta<typeof Underline>;

const Template: ComponentStory<typeof Underline> = (args: UnderlinePropsI) => (
  <x.div display="flex" gap="20px">
    <Underline {...args} />
    <Underline {...args} fill="red.500" />
    <Underline {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
