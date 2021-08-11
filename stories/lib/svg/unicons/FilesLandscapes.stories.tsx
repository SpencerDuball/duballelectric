import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FilesLandscapes, FilesLandscapesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FilesLandscapes",
  component: FilesLandscapes,
} as ComponentMeta<typeof FilesLandscapes>;

const Template: ComponentStory<typeof FilesLandscapes> = (
  args: FilesLandscapesPropsI
) => (
  <Box display="flex" gap="20px">
    <FilesLandscapes {...args} />
    <FilesLandscapes {...args} fill="red.500" />
    <FilesLandscapes {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
