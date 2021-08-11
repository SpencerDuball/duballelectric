import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BitcoinAlt, BitcoinAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BitcoinAlt",
  component: BitcoinAlt,
} as ComponentMeta<typeof BitcoinAlt>;

const Template: ComponentStory<typeof BitcoinAlt> = (
  args: BitcoinAltPropsI
) => (
  <Box display="flex" gap="20px">
    <BitcoinAlt {...args} />
    <BitcoinAlt {...args} fill="red.500" />
    <BitcoinAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
