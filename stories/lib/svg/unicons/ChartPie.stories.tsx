import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartPie, ChartPiePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ChartPie",
  component: ChartPie,
} as ComponentMeta<typeof ChartPie>;

const Template: ComponentStory<typeof ChartPie> = (args: ChartPiePropsI) => (
  <x.div display="flex" gap="20px">
    <ChartPie {...args} />
    <ChartPie {...args} fill="red.500" />
    <ChartPie {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
