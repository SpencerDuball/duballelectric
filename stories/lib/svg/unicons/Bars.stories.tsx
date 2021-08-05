import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bars, BarsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bars",
  component: Bars,
} as ComponentMeta<typeof Bars>;

const Template: ComponentStory<typeof Bars> = (args: BarsPropsI) => (
  <x.div display="flex" gap="20px">
    <Bars {...args} />
    <Bars {...args} fill="red.500" />
    <Bars {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
