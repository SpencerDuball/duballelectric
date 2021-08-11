import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderCheck, FolderCheckPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderCheck",
  component: FolderCheck,
} as ComponentMeta<typeof FolderCheck>;

const Template: ComponentStory<typeof FolderCheck> = (
  args: FolderCheckPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderCheck {...args} />
    <FolderCheck {...args} fill="red.500" />
    <FolderCheck {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
