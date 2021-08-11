import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsMerge, ArrowsMergePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsMerge",
  component: ArrowsMerge,
} as ComponentMeta<typeof ArrowsMerge>;

const Template: ComponentStory<typeof ArrowsMerge> = (
  args: ArrowsMergePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsMerge {...args} />
    <ArrowsMerge {...args} fill="red.500" />
    <ArrowsMerge {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
