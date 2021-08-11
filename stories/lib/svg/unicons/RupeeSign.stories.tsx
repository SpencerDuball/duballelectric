import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RupeeSign, RupeeSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RupeeSign",
  component: RupeeSign,
} as ComponentMeta<typeof RupeeSign>;

const Template: ComponentStory<typeof RupeeSign> = (args: RupeeSignPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <RupeeSign {...args} />
    <RupeeSign {...args} fill="red.500" />
    <RupeeSign {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
