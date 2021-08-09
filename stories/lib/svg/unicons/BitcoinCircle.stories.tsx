import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BitcoinCircle, BitcoinCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BitcoinCircle",
  component: BitcoinCircle,
} as ComponentMeta<typeof BitcoinCircle>;

const Template: ComponentStory<typeof BitcoinCircle> = (
  args: BitcoinCirclePropsI
) => (
  <x.div display="flex" gap="20px">
    <BitcoinCircle {...args} />
    <BitcoinCircle {...args} fill="red.500" />
    <BitcoinCircle {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
