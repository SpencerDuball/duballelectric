import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sorting, SortingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sorting",
  component: Sorting,
} as ComponentMeta<typeof Sorting>;

const Template: ComponentStory<typeof Sorting> = (args: SortingPropsI) => (
  <x.div display="flex" gap="20px">
    <Sorting {...args} />
    <Sorting {...args} fill="red.500" />
    <Sorting {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
