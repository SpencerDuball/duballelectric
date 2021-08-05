import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BookMedical, BookMedicalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BookMedical",
  component: BookMedical,
} as ComponentMeta<typeof BookMedical>;

const Template: ComponentStory<typeof BookMedical> = (
  args: BookMedicalPropsI
) => (
  <x.div display="flex" gap="20px">
    <BookMedical {...args} />
    <BookMedical {...args} fill="red.500" />
    <BookMedical {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
