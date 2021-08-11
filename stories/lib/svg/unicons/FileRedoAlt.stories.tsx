import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileRedoAlt, FileRedoAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileRedoAlt",
  component: FileRedoAlt,
} as ComponentMeta<typeof FileRedoAlt>;

const Template: ComponentStory<typeof FileRedoAlt> = (
  args: FileRedoAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileRedoAlt {...args} />
    <FileRedoAlt {...args} fill="red.500" />
    <FileRedoAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
