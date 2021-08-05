import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartPieAlt, ChartPieAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ChartPieAlt",
  component: ChartPieAlt,
} as ComponentMeta<typeof ChartPieAlt>;

const Template: ComponentStory<typeof ChartPieAlt> = (
  args: ChartPieAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChartPieAlt {...args} />
    <ChartPieAlt {...args} fill="red.500" />
    <ChartPieAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
