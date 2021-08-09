import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceOne, DiceOnePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceOne",
  component: DiceOne,
} as ComponentMeta<typeof DiceOne>;

const Template: ComponentStory<typeof DiceOne> = (args: DiceOnePropsI) => (
  <x.div display="flex" gap="20px">
    <DiceOne {...args} />
    <DiceOne {...args} fill="red.500" />
    <DiceOne {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
