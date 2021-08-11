import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Telescope, TelescopePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Telescope",
  component: Telescope,
} as ComponentMeta<typeof Telescope>;

const Template: ComponentStory<typeof Telescope> = (args: TelescopePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Telescope {...args} />
    <Telescope {...args} fill="red.500" />
    <Telescope {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
