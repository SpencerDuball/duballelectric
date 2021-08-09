import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Utensils, UtensilsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Utensils",
  component: Utensils,
} as ComponentMeta<typeof Utensils>;

const Template: ComponentStory<typeof Utensils> = (args: UtensilsPropsI) => (
  <x.div display="flex" gap="20px">
    <Utensils {...args} />
    <Utensils {...args} fill="red.500" />
    <Utensils {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
