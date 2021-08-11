import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { File, FilePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/File",
  component: File,
} as ComponentMeta<typeof File>;

const Template: ComponentStory<typeof File> = (args: FilePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <File {...args} />
    <File {...args} fill="red.500" />
    <File {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
