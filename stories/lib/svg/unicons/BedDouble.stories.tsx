import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BedDouble, BedDoublePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BedDouble",
  component: BedDouble,
} as ComponentMeta<typeof BedDouble>;

const Template: ComponentStory<typeof BedDouble> = (args: BedDoublePropsI) => (
  <x.div display="flex" gap="20px">
    <BedDouble {...args} />
    <BedDouble {...args} fill="red.500" />
    <BedDouble {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
