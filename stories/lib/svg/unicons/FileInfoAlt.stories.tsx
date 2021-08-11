import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileInfoAlt, FileInfoAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileInfoAlt",
  component: FileInfoAlt,
} as ComponentMeta<typeof FileInfoAlt>;

const Template: ComponentStory<typeof FileInfoAlt> = (
  args: FileInfoAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileInfoAlt {...args} />
    <FileInfoAlt {...args} fill="red.500" />
    <FileInfoAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
