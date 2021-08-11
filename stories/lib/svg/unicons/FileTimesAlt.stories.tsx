import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileTimesAlt, FileTimesAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileTimesAlt",
  component: FileTimesAlt,
} as ComponentMeta<typeof FileTimesAlt>;

const Template: ComponentStory<typeof FileTimesAlt> = (
  args: FileTimesAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileTimesAlt {...args} />
    <FileTimesAlt {...args} fill="red.500" />
    <FileTimesAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
