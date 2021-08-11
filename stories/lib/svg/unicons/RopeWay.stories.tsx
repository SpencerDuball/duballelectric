import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { RopeWay, RopeWayPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/RopeWay",
  component: RopeWay,
} as ComponentMeta<typeof RopeWay>;

const Template: ComponentStory<typeof RopeWay> = (args: RopeWayPropsI) => (
  <Box display="flex" gap="20px">
    <RopeWay {...args} />
    <RopeWay {...args} fill="red.500" />
    <RopeWay {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
