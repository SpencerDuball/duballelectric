import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tape, TapePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tape",
  component: Tape,
} as ComponentMeta<typeof Tape>;

const Template: ComponentStory<typeof Tape> = (args: TapePropsI) => (
  <Box display="flex" gap="20px">
    <Tape {...args} />
    <Tape {...args} fill="red.500" />
    <Tape {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
