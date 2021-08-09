import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FilterSlash, FilterSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FilterSlash",
  component: FilterSlash,
} as ComponentMeta<typeof FilterSlash>;

const Template: ComponentStory<typeof FilterSlash> = (
  args: FilterSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <FilterSlash {...args} />
    <FilterSlash {...args} fill="red.500" />
    <FilterSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
