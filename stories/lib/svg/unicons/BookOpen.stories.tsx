import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BookOpen, BookOpenPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BookOpen",
  component: BookOpen,
} as ComponentMeta<typeof BookOpen>;

const Template: ComponentStory<typeof BookOpen> = (args: BookOpenPropsI) => (
  <x.div display="flex" gap="20px">
    <BookOpen {...args} />
    <BookOpen {...args} fill="red.500" />
    <BookOpen {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
