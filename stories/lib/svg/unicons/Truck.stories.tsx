import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Truck, TruckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Truck",
  component: Truck,
} as ComponentMeta<typeof Truck>;

const Template: ComponentStory<typeof Truck> = (args: TruckPropsI) => (
  <x.div display="flex" gap="20px">
    <Truck {...args} />
    <Truck {...args} fill="red.500" />
    <Truck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
