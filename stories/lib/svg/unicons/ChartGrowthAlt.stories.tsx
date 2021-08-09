import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartGrowthAlt, ChartGrowthAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartGrowthAlt",
  component: ChartGrowthAlt,
} as ComponentMeta<typeof ChartGrowthAlt>;

const Template: ComponentStory<typeof ChartGrowthAlt> = (
  args: ChartGrowthAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChartGrowthAlt {...args} />
    <ChartGrowthAlt {...args} fill="red.500" />
    <ChartGrowthAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
