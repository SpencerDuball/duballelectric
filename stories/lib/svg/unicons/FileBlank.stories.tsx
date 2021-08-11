import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileBlank, FileBlankPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileBlank",
  component: FileBlank,
} as ComponentMeta<typeof FileBlank>;

const Template: ComponentStory<typeof FileBlank> = (args: FileBlankPropsI) => (
  <Box display="flex" gap="20px">
    <FileBlank {...args} />
    <FileBlank {...args} fill="red.500" />
    <FileBlank {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
