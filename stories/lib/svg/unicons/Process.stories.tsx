import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Process, ProcessPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Process",
  component: Process,
} as ComponentMeta<typeof Process>;

const Template: ComponentStory<typeof Process> = (args: ProcessPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Process {...args} />
    <Process {...args} fill="red.500" />
    <Process {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
