import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Shop, ShopPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Shop",
  component: Shop,
} as ComponentMeta<typeof Shop>;

const Template: ComponentStory<typeof Shop> = (args: ShopPropsI) => (
  <x.div display="flex" gap="20px">
    <Shop {...args} />
    <Shop {...args} fill="red.500" />
    <Shop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
