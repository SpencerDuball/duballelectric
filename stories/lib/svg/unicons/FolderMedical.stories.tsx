import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderMedical, FolderMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderMedical",
  component: FolderMedical,
} as ComponentMeta<typeof FolderMedical>;

const Template: ComponentStory<typeof FolderMedical> = (
  args: FolderMedicalPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderMedical {...args} />
    <FolderMedical {...args} fill="red.500" />
    <FolderMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
