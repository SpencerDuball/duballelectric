import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LuggageCart, LuggageCartPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LuggageCart",
  component: LuggageCart,
} as ComponentMeta<typeof LuggageCart>;

const Template: ComponentStory<typeof LuggageCart> = (
  args: LuggageCartPropsI
) => (
  <x.div display="flex" gap="20px">
    <LuggageCart {...args} />
    <LuggageCart {...args} fill="red.500" />
    <LuggageCart {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
