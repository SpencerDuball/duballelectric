import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Exchange, ExchangePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Exchange",
  component: Exchange,
} as ComponentMeta<typeof Exchange>;

const Template: ComponentStory<typeof Exchange> = (args: ExchangePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Exchange {...args} />
    <Exchange {...args} fill="red.500" />
    <Exchange {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
