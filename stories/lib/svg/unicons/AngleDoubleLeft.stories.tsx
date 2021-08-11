import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleDoubleLeft, AngleDoubleLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDoubleLeft",
  component: AngleDoubleLeft,
} as ComponentMeta<typeof AngleDoubleLeft>;

const Template: ComponentStory<typeof AngleDoubleLeft> = (
  args: AngleDoubleLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <AngleDoubleLeft {...args} />
    <AngleDoubleLeft {...args} fill="red.500" />
    <AngleDoubleLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
