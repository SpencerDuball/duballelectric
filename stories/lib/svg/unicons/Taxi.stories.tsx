import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Taxi, TaxiPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Taxi",
  component: Taxi,
} as ComponentMeta<typeof Taxi>;

const Template: ComponentStory<typeof Taxi> = (args: TaxiPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Taxi {...args} />
    <Taxi {...args} fill="red.500" />
    <Taxi {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
