import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Backpack, BackpackPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Backpack",
  component: Backpack,
} as ComponentMeta<typeof Backpack>;

const Template: ComponentStory<typeof Backpack> = (args: BackpackPropsI) => (
  <x.div display="flex" gap="20px">
    <Backpack {...args} />
    <Backpack {...args} fill="red.500" />
    <Backpack {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
