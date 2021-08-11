import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileSearchAlt, FileSearchAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileSearchAlt",
  component: FileSearchAlt,
} as ComponentMeta<typeof FileSearchAlt>;

const Template: ComponentStory<typeof FileSearchAlt> = (
  args: FileSearchAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileSearchAlt {...args} />
    <FileSearchAlt {...args} fill="red.500" />
    <FileSearchAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
