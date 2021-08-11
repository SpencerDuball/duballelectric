import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageSlash, ImageSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageSlash",
  component: ImageSlash,
} as ComponentMeta<typeof ImageSlash>;

const Template: ComponentStory<typeof ImageSlash> = (
  args: ImageSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <ImageSlash {...args} />
    <ImageSlash {...args} fill="red.500" />
    <ImageSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
