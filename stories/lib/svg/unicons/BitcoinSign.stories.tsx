import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BitcoinSign, BitcoinSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BitcoinSign",
  component: BitcoinSign,
} as ComponentMeta<typeof BitcoinSign>;

const Template: ComponentStory<typeof BitcoinSign> = (
  args: BitcoinSignPropsI
) => (
  <Box display="flex" gap="20px">
    <BitcoinSign {...args} />
    <BitcoinSign {...args} fill="red.500" />
    <BitcoinSign {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
