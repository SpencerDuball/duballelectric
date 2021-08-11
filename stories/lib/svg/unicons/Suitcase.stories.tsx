import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Suitcase, SuitcasePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Suitcase",
  component: Suitcase,
} as ComponentMeta<typeof Suitcase>;

const Template: ComponentStory<typeof Suitcase> = (args: SuitcasePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Suitcase {...args} />
    <Suitcase {...args} fill="red.500" />
    <Suitcase {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
