import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileDownloadAlt, FileDownloadAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileDownloadAlt",
  component: FileDownloadAlt,
} as ComponentMeta<typeof FileDownloadAlt>;

const Template: ComponentStory<typeof FileDownloadAlt> = (
  args: FileDownloadAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileDownloadAlt {...args} />
    <FileDownloadAlt {...args} fill="red.500" />
    <FileDownloadAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
