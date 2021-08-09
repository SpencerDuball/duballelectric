import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LetterJapaneseA, LetterJapaneseAPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LetterJapaneseA",
  component: LetterJapaneseA,
} as ComponentMeta<typeof LetterJapaneseA>;

const Template: ComponentStory<typeof LetterJapaneseA> = (
  args: LetterJapaneseAPropsI
) => (
  <x.div display="flex" gap="20px">
    <LetterJapaneseA {...args} />
    <LetterJapaneseA {...args} fill="red.500" />
    <LetterJapaneseA {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
