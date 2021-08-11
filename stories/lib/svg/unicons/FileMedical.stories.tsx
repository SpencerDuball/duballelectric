import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileMedical, FileMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileMedical",
  component: FileMedical,
} as ComponentMeta<typeof FileMedical>;

const Template: ComponentStory<typeof FileMedical> = (
  args: FileMedicalPropsI
) => (
  <Box display="flex" gap="20px">
    <FileMedical {...args} />
    <FileMedical {...args} fill="red.500" />
    <FileMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
