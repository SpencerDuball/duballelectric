import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageShare, ImageSharePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageShare",
  component: ImageShare,
} as ComponentMeta<typeof ImageShare>;

const Template: ComponentStory<typeof ImageShare> = (
  args: ImageSharePropsI
) => (
  <Box display="flex" gap="20px">
    <ImageShare {...args} />
    <ImageShare {...args} fill="red.500" />
    <ImageShare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
