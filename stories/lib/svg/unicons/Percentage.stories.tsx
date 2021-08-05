import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Percentage, PercentagePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Percentage",
  component: Percentage,
} as ComponentMeta<typeof Percentage>;

const Template: ComponentStory<typeof Percentage> = (
  args: PercentagePropsI
) => (
  <x.div display="flex" gap="20px">
    <Percentage {...args} />
    <Percentage {...args} fill="red.500" />
    <Percentage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
