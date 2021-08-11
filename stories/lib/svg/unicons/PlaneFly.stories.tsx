import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PlaneFly, PlaneFlyPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PlaneFly",
  component: PlaneFly,
} as ComponentMeta<typeof PlaneFly>;

const Template: ComponentStory<typeof PlaneFly> = (args: PlaneFlyPropsI) => (
  <Box display="flex" gap="20px">
    <PlaneFly {...args} />
    <PlaneFly {...args} fill="red.500" />
    <PlaneFly {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
