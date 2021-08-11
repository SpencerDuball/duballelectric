import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileImport, FileImportPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileImport",
  component: FileImport,
} as ComponentMeta<typeof FileImport>;

const Template: ComponentStory<typeof FileImport> = (
  args: FileImportPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileImport {...args} />
    <FileImport {...args} fill="red.500" />
    <FileImport {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
