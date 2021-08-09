import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TextStrikeThrough, TextStrikeThroughPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TextStrikeThrough",
  component: TextStrikeThrough,
} as ComponentMeta<typeof TextStrikeThrough>;

const Template: ComponentStory<typeof TextStrikeThrough> = (
  args: TextStrikeThroughPropsI
) => (
  <x.div display="flex" gap="20px">
    <TextStrikeThrough {...args} />
    <TextStrikeThrough {...args} fill="red.500" />
    <TextStrikeThrough {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
