import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FolderDownload, FolderDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FolderDownload",
  component: FolderDownload,
} as ComponentMeta<typeof FolderDownload>;

const Template: ComponentStory<typeof FolderDownload> = (
  args: FolderDownloadPropsI
) => (
  <Box display="flex" gap="20px">
    <FolderDownload {...args} />
    <FolderDownload {...args} fill="red.500" />
    <FolderDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
