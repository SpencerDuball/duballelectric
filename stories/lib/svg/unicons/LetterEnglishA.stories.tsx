import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LetterEnglishA, LetterEnglishAPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LetterEnglishA",
  component: LetterEnglishA,
} as ComponentMeta<typeof LetterEnglishA>;

const Template: ComponentStory<typeof LetterEnglishA> = (
  args: LetterEnglishAPropsI
) => (
  <x.div display="flex" gap="20px">
    <LetterEnglishA {...args} />
    <LetterEnglishA {...args} fill="red.500" />
    <LetterEnglishA {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
