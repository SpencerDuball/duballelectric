import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerDownLeft, CornerDownLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerDownLeft",
  component: CornerDownLeft,
} as ComponentMeta<typeof CornerDownLeft>;

const Template: ComponentStory<typeof CornerDownLeft> = (
  args: CornerDownLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CornerDownLeft {...args} />
    <CornerDownLeft {...args} fill="red.500" />
    <CornerDownLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
