import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowDownLeft, ArrowDownLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowDownLeft",
  component: ArrowDownLeft,
} as ComponentMeta<typeof ArrowDownLeft>;

const Template: ComponentStory<typeof ArrowDownLeft> = (
  args: ArrowDownLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowDownLeft {...args} />
    <ArrowDownLeft {...args} fill="red.500" />
    <ArrowDownLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
