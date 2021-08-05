import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ParkingSquare, ParkingSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ParkingSquare",
  component: ParkingSquare,
} as ComponentMeta<typeof ParkingSquare>;

const Template: ComponentStory<typeof ParkingSquare> = (
  args: ParkingSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <ParkingSquare {...args} />
    <ParkingSquare {...args} fill="red.500" />
    <ParkingSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
