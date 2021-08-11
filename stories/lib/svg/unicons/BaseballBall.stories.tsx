import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BaseballBall, BaseballBallPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BaseballBall",
  component: BaseballBall,
} as ComponentMeta<typeof BaseballBall>;

const Template: ComponentStory<typeof BaseballBall> = (
  args: BaseballBallPropsI
) => (
  <Box display="flex" gap="20px">
    <BaseballBall {...args} />
    <BaseballBall {...args} fill="red.500" />
    <BaseballBall {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
