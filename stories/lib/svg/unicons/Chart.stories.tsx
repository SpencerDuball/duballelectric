import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Chart, ChartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args: ChartPropsI) => (
  <x.div display="flex" gap="20px">
    <Chart {...args} />
    <Chart {...args} fill="red.500" />
    <Chart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
