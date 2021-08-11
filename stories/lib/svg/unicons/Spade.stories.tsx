import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Spade, SpadePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Spade",
  component: Spade,
} as ComponentMeta<typeof Spade>;

const Template: ComponentStory<typeof Spade> = (args: SpadePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Spade {...args} />
    <Spade {...args} fill="red.500" />
    <Spade {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
