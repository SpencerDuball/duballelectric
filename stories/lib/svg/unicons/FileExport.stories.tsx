import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileExport, FileExportPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileExport",
  component: FileExport,
} as ComponentMeta<typeof FileExport>;

const Template: ComponentStory<typeof FileExport> = (
  args: FileExportPropsI
) => (
  <Box display="flex" gap="20px">
    <FileExport {...args} />
    <FileExport {...args} fill="red.500" />
    <FileExport {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
