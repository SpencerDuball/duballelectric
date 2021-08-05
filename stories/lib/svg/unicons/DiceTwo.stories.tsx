import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceTwo, DiceTwoPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DiceTwo",
  component: DiceTwo,
} as ComponentMeta<typeof DiceTwo>;

const Template: ComponentStory<typeof DiceTwo> = (args: DiceTwoPropsI) => (
  <x.div display="flex" gap="20px">
    <DiceTwo {...args} />
    <DiceTwo {...args} fill="red.500" />
    <DiceTwo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
