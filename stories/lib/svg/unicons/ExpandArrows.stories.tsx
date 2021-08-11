import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExpandArrows, ExpandArrowsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandArrows",
  component: ExpandArrows,
} as ComponentMeta<typeof ExpandArrows>;

const Template: ComponentStory<typeof ExpandArrows> = (
  args: ExpandArrowsPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ExpandArrows {...args} />
    <ExpandArrows {...args} fill="red.500" />
    <ExpandArrows {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
