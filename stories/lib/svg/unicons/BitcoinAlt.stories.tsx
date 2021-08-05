import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BitcoinAlt, BitcoinAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BitcoinAlt",
  component: BitcoinAlt,
} as ComponentMeta<typeof BitcoinAlt>;

const Template: ComponentStory<typeof BitcoinAlt> = (
  args: BitcoinAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <BitcoinAlt {...args} />
    <BitcoinAlt {...args} fill="red.500" />
    <BitcoinAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
