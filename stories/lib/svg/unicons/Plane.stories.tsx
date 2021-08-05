import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Plane, PlanePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Plane",
  component: Plane,
} as ComponentMeta<typeof Plane>;

const Template: ComponentStory<typeof Plane> = (args: PlanePropsI) => (
  <x.div display="flex" gap="20px">
    <Plane {...args} />
    <Plane {...args} fill="red.500" />
    <Plane {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
