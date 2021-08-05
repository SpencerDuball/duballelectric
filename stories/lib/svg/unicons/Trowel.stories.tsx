import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Trowel, TrowelPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Trowel",
  component: Trowel,
} as ComponentMeta<typeof Trowel>;

const Template: ComponentStory<typeof Trowel> = (args: TrowelPropsI) => (
  <x.div display="flex" gap="20px">
    <Trowel {...args} />
    <Trowel {...args} fill="red.500" />
    <Trowel {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
