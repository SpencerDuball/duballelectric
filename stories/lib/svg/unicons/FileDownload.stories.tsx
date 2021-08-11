import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileDownload, FileDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileDownload",
  component: FileDownload,
} as ComponentMeta<typeof FileDownload>;

const Template: ComponentStory<typeof FileDownload> = (
  args: FileDownloadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileDownload {...args} />
    <FileDownload {...args} fill="red.500" />
    <FileDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
