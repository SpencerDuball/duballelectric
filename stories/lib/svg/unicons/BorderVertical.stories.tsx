import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderVertical, BorderVerticalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BorderVertical",
  component: BorderVertical,
} as ComponentMeta<typeof BorderVertical>;

const Template: ComponentStory<typeof BorderVertical> = (
  args: BorderVerticalPropsI
) => (
  <x.div display="flex" gap="20px">
    <BorderVertical {...args} />
    <BorderVertical {...args} fill="red.500" />
    <BorderVertical {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
