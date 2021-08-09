import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Football, FootballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Football",
  component: Football,
} as ComponentMeta<typeof Football>;

const Template: ComponentStory<typeof Football> = (args: FootballPropsI) => (
  <x.div display="flex" gap="20px">
    <Football {...args} />
    <Football {...args} fill="red.500" />
    <Football {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
