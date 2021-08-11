import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileHeart, FileHeartPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileHeart",
  component: FileHeart,
} as ComponentMeta<typeof FileHeart>;

const Template: ComponentStory<typeof FileHeart> = (args: FileHeartPropsI) => (
  <Box display="flex" gap="20px">
    <FileHeart {...args} />
    <FileHeart {...args} fill="red.500" />
    <FileHeart {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
