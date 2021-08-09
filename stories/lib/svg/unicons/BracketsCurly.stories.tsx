import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BracketsCurly, BracketsCurlyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BracketsCurly",
  component: BracketsCurly,
} as ComponentMeta<typeof BracketsCurly>;

const Template: ComponentStory<typeof BracketsCurly> = (
  args: BracketsCurlyPropsI
) => (
  <x.div display="flex" gap="20px">
    <BracketsCurly {...args} />
    <BracketsCurly {...args} fill="red.500" />
    <BracketsCurly {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
