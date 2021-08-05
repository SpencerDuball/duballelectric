import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Filter, FilterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args: FilterPropsI) => (
  <x.div display="flex" gap="20px">
    <Filter {...args} />
    <Filter {...args} fill="red.500" />
    <Filter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
