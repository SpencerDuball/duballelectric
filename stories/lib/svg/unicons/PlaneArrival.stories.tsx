import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlaneArrival, PlaneArrivalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PlaneArrival",
  component: PlaneArrival,
} as ComponentMeta<typeof PlaneArrival>;

const Template: ComponentStory<typeof PlaneArrival> = (
  args: PlaneArrivalPropsI
) => (
  <x.div display="flex" gap="20px">
    <PlaneArrival {...args} />
    <PlaneArrival {...args} fill="red.500" />
    <PlaneArrival {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
