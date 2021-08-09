import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LetterChineseA, LetterChineseAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterChineseA",
  component: LetterChineseA,
} as ComponentMeta<typeof LetterChineseA>;

const Template: ComponentStory<typeof LetterChineseA> = (
  args: LetterChineseAPropsI
) => (
  <x.div display="flex" gap="20px">
    <LetterChineseA {...args} />
    <LetterChineseA {...args} fill="red.500" />
    <LetterChineseA {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
