import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ear, EarPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Ear",
  component: Ear,
} as ComponentMeta<typeof Ear>;

const Template: ComponentStory<typeof Ear> = (args: EarPropsI) => (
  <x.div display="flex" gap="20px">
    <Ear {...args} />
    <Ear {...args} fill="red.500" />
    <Ear {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
