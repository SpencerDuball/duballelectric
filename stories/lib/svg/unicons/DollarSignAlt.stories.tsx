import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DollarSignAlt, DollarSignAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DollarSignAlt",
  component: DollarSignAlt,
} as ComponentMeta<typeof DollarSignAlt>;

const Template: ComponentStory<typeof DollarSignAlt> = (
  args: DollarSignAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <DollarSignAlt {...args} />
    <DollarSignAlt {...args} fill="red.500" />
    <DollarSignAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
