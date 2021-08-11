import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileCheckAlt, FileCheckAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileCheckAlt",
  component: FileCheckAlt,
} as ComponentMeta<typeof FileCheckAlt>;

const Template: ComponentStory<typeof FileCheckAlt> = (
  args: FileCheckAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileCheckAlt {...args} />
    <FileCheckAlt {...args} fill="red.500" />
    <FileCheckAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
