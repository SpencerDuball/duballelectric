import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageDownload, ImageDownloadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageDownload",
  component: ImageDownload,
} as ComponentMeta<typeof ImageDownload>;

const Template: ComponentStory<typeof ImageDownload> = (
  args: ImageDownloadPropsI
) => (
  <Box display="flex" gap="20px">
    <ImageDownload {...args} />
    <ImageDownload {...args} fill="red.500" />
    <ImageDownload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
