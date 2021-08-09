import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bitcoin, BitcoinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bitcoin",
  component: Bitcoin,
} as ComponentMeta<typeof Bitcoin>;

const Template: ComponentStory<typeof Bitcoin> = (args: BitcoinPropsI) => (
  <x.div display="flex" gap="20px">
    <Bitcoin {...args} />
    <Bitcoin {...args} fill="red.500" />
    <Bitcoin {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
