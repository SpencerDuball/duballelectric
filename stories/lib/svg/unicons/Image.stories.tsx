import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Image, ImagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImagePropsI) => (
  <Box display="flex" gap="20px">
    <Image {...args} />
    <Image {...args} fill="red.500" />
    <Image {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
