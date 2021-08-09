import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceThree, DiceThreePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DiceThree",
  component: DiceThree,
} as ComponentMeta<typeof DiceThree>;

const Template: ComponentStory<typeof DiceThree> = (args: DiceThreePropsI) => (
  <x.div display="flex" gap="20px">
    <DiceThree {...args} />
    <DiceThree {...args} fill="red.500" />
    <DiceThree {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
