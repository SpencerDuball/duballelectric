import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TopArrowFromTop, TopArrowFromTopPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TopArrowFromTop",
  component: TopArrowFromTop,
} as ComponentMeta<typeof TopArrowFromTop>;

const Template: ComponentStory<typeof TopArrowFromTop> = (
  args: TopArrowFromTopPropsI
) => (
  <x.div display="flex" gap="20px">
    <TopArrowFromTop {...args} />
    <TopArrowFromTop {...args} fill="red.500" />
    <TopArrowFromTop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
