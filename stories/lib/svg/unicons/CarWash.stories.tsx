import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CarWash, CarWashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CarWash",
  component: CarWash,
} as ComponentMeta<typeof CarWash>;

const Template: ComponentStory<typeof CarWash> = (args: CarWashPropsI) => (
  <x.div display="flex" gap="20px">
    <CarWash {...args} />
    <CarWash {...args} fill="red.500" />
    <CarWash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
