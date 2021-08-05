import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BusAlt, BusAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BusAlt",
  component: BusAlt,
} as ComponentMeta<typeof BusAlt>;

const Template: ComponentStory<typeof BusAlt> = (args: BusAltPropsI) => (
  <x.div display="flex" gap="20px">
    <BusAlt {...args} />
    <BusAlt {...args} fill="red.500" />
    <BusAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
