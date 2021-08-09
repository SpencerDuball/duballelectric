import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Vk, VkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Vk",
  component: Vk,
} as ComponentMeta<typeof Vk>;

const Template: ComponentStory<typeof Vk> = (args: VkPropsI) => (
  <x.div display="flex" gap="20px">
    <Vk {...args} />
    <Vk {...args} fill="red.500" />
    <Vk {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
