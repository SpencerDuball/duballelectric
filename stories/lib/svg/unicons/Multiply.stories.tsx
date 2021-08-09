import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Multiply, MultiplyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Multiply",
  component: Multiply,
} as ComponentMeta<typeof Multiply>;

const Template: ComponentStory<typeof Multiply> = (args: MultiplyPropsI) => (
  <x.div display="flex" gap="20px">
    <Multiply {...args} />
    <Multiply {...args} fill="red.500" />
    <Multiply {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
