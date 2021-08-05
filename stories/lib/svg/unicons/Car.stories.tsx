import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Car, CarPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Car",
  component: Car,
} as ComponentMeta<typeof Car>;

const Template: ComponentStory<typeof Car> = (args: CarPropsI) => (
  <x.div display="flex" gap="20px">
    <Car {...args} />
    <Car {...args} fill="red.500" />
    <Car {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
