import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileMinusAlt, FileMinusAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileMinusAlt",
  component: FileMinusAlt,
} as ComponentMeta<typeof FileMinusAlt>;

const Template: ComponentStory<typeof FileMinusAlt> = (
  args: FileMinusAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileMinusAlt {...args} />
    <FileMinusAlt {...args} fill="red.500" />
    <FileMinusAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
