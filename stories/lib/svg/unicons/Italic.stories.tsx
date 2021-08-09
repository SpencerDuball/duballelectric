import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Italic, ItalicPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Italic",
  component: Italic,
} as ComponentMeta<typeof Italic>;

const Template: ComponentStory<typeof Italic> = (args: ItalicPropsI) => (
  <x.div display="flex" gap="20px">
    <Italic {...args} />
    <Italic {...args} fill="red.500" />
    <Italic {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
