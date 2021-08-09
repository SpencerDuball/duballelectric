import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChartDown, ChartDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChartDown",
  component: ChartDown,
} as ComponentMeta<typeof ChartDown>;

const Template: ComponentStory<typeof ChartDown> = (args: ChartDownPropsI) => (
  <x.div display="flex" gap="20px">
    <ChartDown {...args} />
    <ChartDown {...args} fill="red.500" />
    <ChartDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
