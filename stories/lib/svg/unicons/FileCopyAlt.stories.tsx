import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileCopyAlt, FileCopyAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileCopyAlt",
  component: FileCopyAlt,
} as ComponentMeta<typeof FileCopyAlt>;

const Template: ComponentStory<typeof FileCopyAlt> = (
  args: FileCopyAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileCopyAlt {...args} />
    <FileCopyAlt {...args} fill="red.500" />
    <FileCopyAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
