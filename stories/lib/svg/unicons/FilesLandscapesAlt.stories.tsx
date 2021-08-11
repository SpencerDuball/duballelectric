import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FilesLandscapesAlt, FilesLandscapesAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FilesLandscapesAlt",
  component: FilesLandscapesAlt,
} as ComponentMeta<typeof FilesLandscapesAlt>;

const Template: ComponentStory<typeof FilesLandscapesAlt> = (
  args: FilesLandscapesAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FilesLandscapesAlt {...args} />
    <FilesLandscapesAlt {...args} fill="red.500" />
    <FilesLandscapesAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
