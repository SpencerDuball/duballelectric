import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Coins, CoinsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Coins",
  component: Coins,
} as ComponentMeta<typeof Coins>;

const Template: ComponentStory<typeof Coins> = (args: CoinsPropsI) => (
  <x.div display="flex" gap="20px">
    <Coins {...args} />
    <Coins {...args} fill="red.500" />
    <Coins {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
