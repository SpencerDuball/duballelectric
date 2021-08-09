import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  ProgrammingLanguage,
  ProgrammingLanguagePropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ProgrammingLanguage",
  component: ProgrammingLanguage,
} as ComponentMeta<typeof ProgrammingLanguage>;

const Template: ComponentStory<typeof ProgrammingLanguage> = (
  args: ProgrammingLanguagePropsI
) => (
  <x.div display="flex" gap="20px">
    <ProgrammingLanguage {...args} />
    <ProgrammingLanguage {...args} fill="red.500" />
    <ProgrammingLanguage {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
