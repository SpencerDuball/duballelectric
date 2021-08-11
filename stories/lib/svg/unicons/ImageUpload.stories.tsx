import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageUpload, ImageUploadPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageUpload",
  component: ImageUpload,
} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (
  args: ImageUploadPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageUpload {...args} />
    <ImageUpload {...args} fill="red.500" />
    <ImageUpload {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
