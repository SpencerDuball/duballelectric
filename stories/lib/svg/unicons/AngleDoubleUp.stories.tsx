import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AngleDoubleUp, AngleDoubleUpPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleDoubleUp",
  component: AngleDoubleUp,
} as ComponentMeta<typeof AngleDoubleUp>;

const Template: ComponentStory<typeof AngleDoubleUp> = (
  args: AngleDoubleUpPropsI
) => (
  <Box display="flex" gap="20px">
    <AngleDoubleUp {...args} />
    <AngleDoubleUp {...args} fill="red.500" />
    <AngleDoubleUp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
