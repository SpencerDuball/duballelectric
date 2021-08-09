import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Favorite, FavoritePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Favorite",
  component: Favorite,
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (args: FavoritePropsI) => (
  <x.div display="flex" gap="20px">
    <Favorite {...args} />
    <Favorite {...args} fill="red.500" />
    <Favorite {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
