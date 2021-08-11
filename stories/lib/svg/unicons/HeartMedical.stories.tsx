import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeartMedical, HeartMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeartMedical",
  component: HeartMedical,
} as ComponentMeta<typeof HeartMedical>;

const Template: ComponentStory<typeof HeartMedical> = (
  args: HeartMedicalPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <HeartMedical {...args} />
    <HeartMedical {...args} fill="red.500" />
    <HeartMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
