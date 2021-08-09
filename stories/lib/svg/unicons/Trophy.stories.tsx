import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Trophy, TrophyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Trophy",
  component: Trophy,
} as ComponentMeta<typeof Trophy>;

const Template: ComponentStory<typeof Trophy> = (args: TrophyPropsI) => (
  <x.div display="flex" gap="20px">
    <Trophy {...args} />
    <Trophy {...args} fill="red.500" />
    <Trophy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
