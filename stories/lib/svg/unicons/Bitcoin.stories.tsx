import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bitcoin, BitcoinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bitcoin",
  component: Bitcoin,
} as ComponentMeta<typeof Bitcoin>;

const Template: ComponentStory<typeof Bitcoin> = (args: BitcoinPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bitcoin {...args} />
    <Bitcoin {...args} fill="red.500" />
    <Bitcoin {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
