import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Restaurant, RestaurantPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Restaurant",
  component: Restaurant,
} as ComponentMeta<typeof Restaurant>;

const Template: ComponentStory<typeof Restaurant> = (
  args: RestaurantPropsI
) => (
  <x.div display="flex" gap="20px">
    <Restaurant {...args} />
    <Restaurant {...args} fill="red.500" />
    <Restaurant {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
