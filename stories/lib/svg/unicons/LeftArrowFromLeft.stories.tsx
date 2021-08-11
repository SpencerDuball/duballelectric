import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LeftArrowFromLeft, LeftArrowFromLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LeftArrowFromLeft",
  component: LeftArrowFromLeft,
} as ComponentMeta<typeof LeftArrowFromLeft>;

const Template: ComponentStory<typeof LeftArrowFromLeft> = (
  args: LeftArrowFromLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LeftArrowFromLeft {...args} />
    <LeftArrowFromLeft {...args} fill="red.500" />
    <LeftArrowFromLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
