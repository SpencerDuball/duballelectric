import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Home, HomePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args: HomePropsI) => (
  <x.div display="flex" gap="20px">
    <Home {...args} />
    <Home {...args} fill="red.500" />
    <Home {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
