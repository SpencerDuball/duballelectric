import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageV, ImageVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageV",
  component: ImageV,
} as ComponentMeta<typeof ImageV>;

const Template: ComponentStory<typeof ImageV> = (args: ImageVPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ImageV {...args} />
    <ImageV {...args} fill="red.500" />
    <ImageV {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
