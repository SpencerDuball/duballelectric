import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Circle, CirclePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (args: CirclePropsI) => (
  <x.div display="flex" gap="20px">
    <Circle {...args} />
    <Circle {...args} fill="red.500" />
    <Circle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
