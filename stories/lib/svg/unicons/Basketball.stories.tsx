import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Basketball, BasketballPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Basketball",
  component: Basketball,
} as ComponentMeta<typeof Basketball>;

const Template: ComponentStory<typeof Basketball> = (
  args: BasketballPropsI
) => (
  <x.div display="flex" gap="20px">
    <Basketball {...args} />
    <Basketball {...args} fill="red.500" />
    <Basketball {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
