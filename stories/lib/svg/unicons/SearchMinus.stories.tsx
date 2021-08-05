import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SearchMinus, SearchMinusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SearchMinus",
  component: SearchMinus,
} as ComponentMeta<typeof SearchMinus>;

const Template: ComponentStory<typeof SearchMinus> = (
  args: SearchMinusPropsI
) => (
  <x.div display="flex" gap="20px">
    <SearchMinus {...args} />
    <SearchMinus {...args} fill="red.500" />
    <SearchMinus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
