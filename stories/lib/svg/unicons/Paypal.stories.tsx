import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Paypal, PaypalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Paypal",
  component: Paypal,
} as ComponentMeta<typeof Paypal>;

const Template: ComponentStory<typeof Paypal> = (args: PaypalPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Paypal {...args} />
    <Paypal {...args} fill="red.500" />
    <Paypal {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
