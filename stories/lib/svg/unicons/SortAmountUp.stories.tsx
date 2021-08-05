import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SortAmountUp, SortAmountUpPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SortAmountUp",
  component: SortAmountUp,
} as ComponentMeta<typeof SortAmountUp>;

const Template: ComponentStory<typeof SortAmountUp> = (
  args: SortAmountUpPropsI
) => (
  <x.div display="flex" gap="20px">
    <SortAmountUp {...args} />
    <SortAmountUp {...args} fill="red.500" />
    <SortAmountUp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
