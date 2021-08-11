import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GolfBall, GolfBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GolfBall",
  component: GolfBall,
} as ComponentMeta<typeof GolfBall>;

const Template: ComponentStory<typeof GolfBall> = (args: GolfBallPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <GolfBall {...args} />
    <GolfBall {...args} fill="red.500" />
    <GolfBall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
