import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowCircleLeft, ArrowCircleLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowCircleLeft",
  component: ArrowCircleLeft,
} as ComponentMeta<typeof ArrowCircleLeft>;

const Template: ComponentStory<typeof ArrowCircleLeft> = (
  args: ArrowCircleLeftPropsI
) => (
  <Box display="flex" gap="20px">
    <ArrowCircleLeft {...args} />
    <ArrowCircleLeft {...args} fill="red.500" />
    <ArrowCircleLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
