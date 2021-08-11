import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileShareAlt, FileShareAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileShareAlt",
  component: FileShareAlt,
} as ComponentMeta<typeof FileShareAlt>;

const Template: ComponentStory<typeof FileShareAlt> = (
  args: FileShareAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileShareAlt {...args} />
    <FileShareAlt {...args} fill="red.500" />
    <FileShareAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
