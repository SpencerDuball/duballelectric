import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Direction, DirectionPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Direction",
  component: Direction,
} as ComponentMeta<typeof Direction>;

const Template: ComponentStory<typeof Direction> = (args: DirectionPropsI) => (
  <x.div display="flex" gap="20px">
    <Direction {...args} />
    <Direction {...args} fill="red.500" />
    <Direction {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
