import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BitcoinSign, BitcoinSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BitcoinSign",
  component: BitcoinSign,
} as ComponentMeta<typeof BitcoinSign>;

const Template: ComponentStory<typeof BitcoinSign> = (
  args: BitcoinSignPropsI
) => (
  <x.div display="flex" gap="20px">
    <BitcoinSign {...args} />
    <BitcoinSign {...args} fill="red.500" />
    <BitcoinSign {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
