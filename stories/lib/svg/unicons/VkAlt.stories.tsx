import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VkAlt, VkAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/VkAlt",
  component: VkAlt,
} as ComponentMeta<typeof VkAlt>;

const Template: ComponentStory<typeof VkAlt> = (args: VkAltPropsI) => (
  <x.div display="flex" gap="20px">
    <VkAlt {...args} />
    <VkAlt {...args} fill="red.500" />
    <VkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
