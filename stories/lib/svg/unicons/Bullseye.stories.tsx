import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bullseye, BullseyePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bullseye",
  component: Bullseye,
} as ComponentMeta<typeof Bullseye>;

const Template: ComponentStory<typeof Bullseye> = (args: BullseyePropsI) => (
  <Box display="flex" gap="20px">
    <Bullseye {...args} />
    <Bullseye {...args} fill="red.500" />
    <Bullseye {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
