import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderExclamation, FolderExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderExclamation",
  component: FolderExclamation,
} as ComponentMeta<typeof FolderExclamation>;

const Template: ComponentStory<typeof FolderExclamation> = (
  args: FolderExclamationPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderExclamation {...args} />
    <FolderExclamation {...args} fill="red.500" />
    <FolderExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
