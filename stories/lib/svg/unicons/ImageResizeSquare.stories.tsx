import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageResizeSquare, ImageResizeSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageResizeSquare",
  component: ImageResizeSquare,
} as ComponentMeta<typeof ImageResizeSquare>;

const Template: ComponentStory<typeof ImageResizeSquare> = (
  args: ImageResizeSquarePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageResizeSquare {...args} />
    <ImageResizeSquare {...args} fill="red.500" />
    <ImageResizeSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
