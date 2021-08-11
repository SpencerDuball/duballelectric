import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileExclamation, FileExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileExclamation",
  component: FileExclamation,
} as ComponentMeta<typeof FileExclamation>;

const Template: ComponentStory<typeof FileExclamation> = (
  args: FileExclamationPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileExclamation {...args} />
    <FileExclamation {...args} fill="red.500" />
    <FileExclamation {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
