import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Newspaper, NewspaperPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Newspaper",
  component: Newspaper,
} as ComponentMeta<typeof Newspaper>;

const Template: ComponentStory<typeof Newspaper> = (args: NewspaperPropsI) => (
  <x.div display="flex" gap="20px">
    <Newspaper {...args} />
    <Newspaper {...args} fill="red.500" />
    <Newspaper {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
