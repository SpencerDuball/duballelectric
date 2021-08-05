import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Crockery, CrockeryPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Crockery",
  component: Crockery,
} as ComponentMeta<typeof Crockery>;

const Template: ComponentStory<typeof Crockery> = (args: CrockeryPropsI) => (
  <x.div display="flex" gap="20px">
    <Crockery {...args} />
    <Crockery {...args} fill="red.500" />
    <Crockery {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
