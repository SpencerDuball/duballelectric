import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Spade, SpadePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Spade",
  component: Spade,
} as ComponentMeta<typeof Spade>;

const Template: ComponentStory<typeof Spade> = (args: SpadePropsI) => (
  <x.div display="flex" gap="20px">
    <Spade {...args} />
    <Spade {...args} fill="red.500" />
    <Spade {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
