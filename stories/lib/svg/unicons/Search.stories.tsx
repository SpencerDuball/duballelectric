import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Search, SearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args: SearchPropsI) => (
  <x.div display="flex" gap="20px">
    <Search {...args} />
    <Search {...args} fill="red.500" />
    <Search {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
