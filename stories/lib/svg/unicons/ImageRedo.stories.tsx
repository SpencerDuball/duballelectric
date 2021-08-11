import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageRedo, ImageRedoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageRedo",
  component: ImageRedo,
} as ComponentMeta<typeof ImageRedo>;

const Template: ComponentStory<typeof ImageRedo> = (args: ImageRedoPropsI) => (
  <Box display="flex" gap="20px">
    <ImageRedo {...args} />
    <ImageRedo {...args} fill="red.500" />
    <ImageRedo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
