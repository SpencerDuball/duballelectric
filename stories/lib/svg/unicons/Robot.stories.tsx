import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Robot, RobotPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Robot",
  component: Robot,
} as ComponentMeta<typeof Robot>;

const Template: ComponentStory<typeof Robot> = (args: RobotPropsI) => (
  <Box display="flex" gap="20px">
    <Robot {...args} />
    <Robot {...args} fill="red.500" />
    <Robot {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
