import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Square, SquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Square",
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args: SquarePropsI) => (
  <x.div display="flex" gap="20px">
    <Square {...args} />
    <Square {...args} fill="red.500" />
    <Square {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
