import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleDoubleUp, AngleDoubleUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDoubleUp",
  component: AngleDoubleUp,
} as ComponentMeta<typeof AngleDoubleUp>;

const Template: ComponentStory<typeof AngleDoubleUp> = (
  args: AngleDoubleUpPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleDoubleUp {...args} />
    <AngleDoubleUp {...args} fill="red.500" />
    <AngleDoubleUp {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
