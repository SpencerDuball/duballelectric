import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ship, ShipPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Ship",
  component: Ship,
} as ComponentMeta<typeof Ship>;

const Template: ComponentStory<typeof Ship> = (args: ShipPropsI) => (
  <x.div display="flex" gap="20px">
    <Ship {...args} />
    <Ship {...args} fill="red.500" />
    <Ship {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
