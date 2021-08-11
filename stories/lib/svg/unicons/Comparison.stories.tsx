import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Comparison, ComparisonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Comparison",
  component: Comparison,
} as ComponentMeta<typeof Comparison>;

const Template: ComponentStory<typeof Comparison> = (
  args: ComparisonPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <Comparison {...args} />
    <Comparison {...args} fill="red.500" />
    <Comparison {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
