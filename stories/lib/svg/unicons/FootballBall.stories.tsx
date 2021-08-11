import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FootballBall, FootballBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FootballBall",
  component: FootballBall,
} as ComponentMeta<typeof FootballBall>;

const Template: ComponentStory<typeof FootballBall> = (
  args: FootballBallPropsI
) => (
  <Box display="flex" gap="20px">
    <FootballBall {...args} />
    <FootballBall {...args} fill="red.500" />
    <FootballBall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
