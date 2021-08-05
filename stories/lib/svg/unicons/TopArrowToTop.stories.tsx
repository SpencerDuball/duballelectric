import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TopArrowToTop, TopArrowToTopPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TopArrowToTop",
  component: TopArrowToTop,
} as ComponentMeta<typeof TopArrowToTop>;

const Template: ComponentStory<typeof TopArrowToTop> = (
  args: TopArrowToTopPropsI
) => (
  <x.div display="flex" gap="20px">
    <TopArrowToTop {...args} />
    <TopArrowToTop {...args} fill="red.500" />
    <TopArrowToTop {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
