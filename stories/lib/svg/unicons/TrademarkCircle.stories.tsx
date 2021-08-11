import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TrademarkCircle, TrademarkCirclePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TrademarkCircle",
  component: TrademarkCircle,
} as ComponentMeta<typeof TrademarkCircle>;

const Template: ComponentStory<typeof TrademarkCircle> = (
  args: TrademarkCirclePropsI
) => (
  <Box display="flex" gap="20px">
    <TrademarkCircle {...args} />
    <TrademarkCircle {...args} fill="red.500" />
    <TrademarkCircle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
