import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageSearch, ImageSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageSearch",
  component: ImageSearch,
} as ComponentMeta<typeof ImageSearch>;

const Template: ComponentStory<typeof ImageSearch> = (
  args: ImageSearchPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageSearch {...args} />
    <ImageSearch {...args} fill="red.500" />
    <ImageSearch {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
