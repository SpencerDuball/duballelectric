import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LetterHindiA, LetterHindiAPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LetterHindiA",
  component: LetterHindiA,
} as ComponentMeta<typeof LetterHindiA>;

const Template: ComponentStory<typeof LetterHindiA> = (
  args: LetterHindiAPropsI
) => (
  <x.div display="flex" gap="20px">
    <LetterHindiA {...args} />
    <LetterHindiA {...args} fill="red.500" />
    <LetterHindiA {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
