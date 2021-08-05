import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sort, SortPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sort",
  component: Sort,
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = (args: SortPropsI) => (
  <x.div display="flex" gap="20px">
    <Sort {...args} />
    <Sort {...args} fill="red.500" />
    <Sort {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
