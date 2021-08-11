import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileLandscapeAlt, FileLandscapeAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileLandscapeAlt",
  component: FileLandscapeAlt,
} as ComponentMeta<typeof FileLandscapeAlt>;

const Template: ComponentStory<typeof FileLandscapeAlt> = (
  args: FileLandscapeAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileLandscapeAlt {...args} />
    <FileLandscapeAlt {...args} fill="red.500" />
    <FileLandscapeAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
