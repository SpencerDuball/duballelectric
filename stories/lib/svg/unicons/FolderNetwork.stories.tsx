import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderNetwork, FolderNetworkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderNetwork",
  component: FolderNetwork,
} as ComponentMeta<typeof FolderNetwork>;

const Template: ComponentStory<typeof FolderNetwork> = (
  args: FolderNetworkPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderNetwork {...args} />
    <FolderNetwork {...args} fill="red.500" />
    <FolderNetwork {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
