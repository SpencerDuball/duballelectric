import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartGrowth, ChartGrowthPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartGrowth",
  component: ChartGrowth,
} as ComponentMeta<typeof ChartGrowth>;

const Template: ComponentStory<typeof ChartGrowth> = (
  args: ChartGrowthPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChartGrowth {...args} />
    <ChartGrowth {...args} fill="red.500" />
    <ChartGrowth {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
