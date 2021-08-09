import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderHorizontal, BorderHorizontalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BorderHorizontal",
  component: BorderHorizontal,
} as ComponentMeta<typeof BorderHorizontal>;

const Template: ComponentStory<typeof BorderHorizontal> = (
  args: BorderHorizontalPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderHorizontal {...args} />
    <BorderHorizontal {...args} fill="red.500" />
    <BorderHorizontal {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
