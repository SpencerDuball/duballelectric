import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TennisBall, TennisBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TennisBall",
  component: TennisBall,
} as ComponentMeta<typeof TennisBall>;

const Template: ComponentStory<typeof TennisBall> = (
  args: TennisBallPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TennisBall {...args} />
    <TennisBall {...args} fill="red.500" />
    <TennisBall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
