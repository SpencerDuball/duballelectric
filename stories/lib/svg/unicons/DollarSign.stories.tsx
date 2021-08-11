import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { DollarSign, DollarSignPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DollarSign",
  component: DollarSign,
} as ComponentMeta<typeof DollarSign>;

const Template: ComponentStory<typeof DollarSign> = (
  args: DollarSignPropsI
) => (
  <Box display="flex" gap="20px">
    <DollarSign {...args} />
    <DollarSign {...args} fill="red.500" />
    <DollarSign {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
