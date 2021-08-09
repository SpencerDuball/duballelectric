import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SortAmountDown, SortAmountDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SortAmountDown",
  component: SortAmountDown,
} as ComponentMeta<typeof SortAmountDown>;

const Template: ComponentStory<typeof SortAmountDown> = (
  args: SortAmountDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <SortAmountDown {...args} />
    <SortAmountDown {...args} fill="red.500" />
    <SortAmountDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
