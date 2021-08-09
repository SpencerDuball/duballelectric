import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Abacus, AbacusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Abacus",
  component: Abacus,
} as ComponentMeta<typeof Abacus>;

const Template: ComponentStory<typeof Abacus> = (args: AbacusPropsI) => (
  <x.div display="flex" gap="20px">
    <Abacus {...args} />
    <Abacus {...args} fill="red.500" />
    <Abacus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
