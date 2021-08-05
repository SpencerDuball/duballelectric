import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TextSize, TextSizePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/TextSize",
  component: TextSize,
} as ComponentMeta<typeof TextSize>;

const Template: ComponentStory<typeof TextSize> = (args: TextSizePropsI) => (
  <x.div display="flex" gap="20px">
    <TextSize {...args} />
    <TextSize {...args} fill="red.500" />
    <TextSize {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
