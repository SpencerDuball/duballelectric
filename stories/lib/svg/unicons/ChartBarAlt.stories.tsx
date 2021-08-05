import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartBarAlt, ChartBarAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ChartBarAlt",
  component: ChartBarAlt,
} as ComponentMeta<typeof ChartBarAlt>;

const Template: ComponentStory<typeof ChartBarAlt> = (
  args: ChartBarAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChartBarAlt {...args} />
    <ChartBarAlt {...args} fill="red.500" />
    <ChartBarAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
