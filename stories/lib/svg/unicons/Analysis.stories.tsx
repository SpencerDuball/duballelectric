import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Analysis, AnalysisPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Analysis",
  component: Analysis,
} as ComponentMeta<typeof Analysis>;

const Template: ComponentStory<typeof Analysis> = (args: AnalysisPropsI) => (
  <Box display="flex" gap="20px">
    <Analysis {...args} />
    <Analysis {...args} fill="red.500" />
    <Analysis {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
