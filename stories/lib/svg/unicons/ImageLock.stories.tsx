import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageLock, ImageLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageLock",
  component: ImageLock,
} as ComponentMeta<typeof ImageLock>;

const Template: ComponentStory<typeof ImageLock> = (args: ImageLockPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageLock {...args} />
    <ImageLock {...args} fill="red.500" />
    <ImageLock {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
