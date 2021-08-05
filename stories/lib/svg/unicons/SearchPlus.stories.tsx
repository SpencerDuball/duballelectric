import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SearchPlus, SearchPlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SearchPlus",
  component: SearchPlus,
} as ComponentMeta<typeof SearchPlus>;

const Template: ComponentStory<typeof SearchPlus> = (
  args: SearchPlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <SearchPlus {...args} />
    <SearchPlus {...args} fill="red.500" />
    <SearchPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
