import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FootballAmerican, FootballAmericanPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FootballAmerican",
  component: FootballAmerican,
} as ComponentMeta<typeof FootballAmerican>;

const Template: ComponentStory<typeof FootballAmerican> = (
  args: FootballAmericanPropsI
) => (
  <x.div display="flex" gap="20px">
    <FootballAmerican {...args} />
    <FootballAmerican {...args} fill="red.500" />
    <FootballAmerican {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
