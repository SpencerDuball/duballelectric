import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Th, ThPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Th",
  component: Th,
} as ComponentMeta<typeof Th>;

const Template: ComponentStory<typeof Th> = (args: ThPropsI) => (
  <x.div display="flex" gap="20px">
    <Th {...args} />
    <Th {...args} fill="red.500" />
    <Th {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
