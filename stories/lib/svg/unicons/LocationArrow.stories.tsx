import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { LocationArrow, LocationArrowPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/LocationArrow",
  component: LocationArrow,
} as ComponentMeta<typeof LocationArrow>;

const Template: ComponentStory<typeof LocationArrow> = (
  args: LocationArrowPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <LocationArrow {...args} />
    <LocationArrow {...args} fill="red.500" />
    <LocationArrow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
