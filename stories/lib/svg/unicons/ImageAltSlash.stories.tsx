import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageAltSlash, ImageAltSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageAltSlash",
  component: ImageAltSlash,
} as ComponentMeta<typeof ImageAltSlash>;

const Template: ComponentStory<typeof ImageAltSlash> = (
  args: ImageAltSlashPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageAltSlash {...args} />
    <ImageAltSlash {...args} fill="red.500" />
    <ImageAltSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
