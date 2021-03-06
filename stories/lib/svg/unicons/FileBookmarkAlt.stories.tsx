import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileBookmarkAlt, FileBookmarkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileBookmarkAlt",
  component: FileBookmarkAlt,
} as ComponentMeta<typeof FileBookmarkAlt>;

const Template: ComponentStory<typeof FileBookmarkAlt> = (
  args: FileBookmarkAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileBookmarkAlt {...args} />
    <FileBookmarkAlt {...args} fill="red.500" />
    <FileBookmarkAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
