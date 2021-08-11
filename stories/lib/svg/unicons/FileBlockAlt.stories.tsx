import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileBlockAlt, FileBlockAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileBlockAlt",
  component: FileBlockAlt,
} as ComponentMeta<typeof FileBlockAlt>;

const Template: ComponentStory<typeof FileBlockAlt> = (
  args: FileBlockAltPropsI
) => (
  <Box display="flex" gap="20px">
    <FileBlockAlt {...args} />
    <FileBlockAlt {...args} fill="red.500" />
    <FileBlockAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
