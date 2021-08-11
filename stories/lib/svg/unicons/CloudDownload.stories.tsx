import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudDownload, CloudDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudDownload",
  component: CloudDownload,
} as ComponentMeta<typeof CloudDownload>;

const Template: ComponentStory<typeof CloudDownload> = (
  args: CloudDownloadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudDownload {...args} />
    <CloudDownload {...args} fill="red.500" />
    <CloudDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
