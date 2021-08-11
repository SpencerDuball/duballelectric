import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileTimes, FileTimesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileTimes",
  component: FileTimes,
} as ComponentMeta<typeof FileTimes>;

const Template: ComponentStory<typeof FileTimes> = (args: FileTimesPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FileTimes {...args} />
    <FileTimes {...args} fill="red.500" />
    <FileTimes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
