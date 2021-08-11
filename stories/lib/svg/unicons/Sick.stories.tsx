import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sick, SickPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sick",
  component: Sick,
} as ComponentMeta<typeof Sick>;

const Template: ComponentStory<typeof Sick> = (args: SickPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sick {...args} />
    <Sick {...args} fill="red.500" />
    <Sick {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
