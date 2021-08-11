import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ImageBroken, ImageBrokenPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ImageBroken",
  component: ImageBroken,
} as ComponentMeta<typeof ImageBroken>;

const Template: ComponentStory<typeof ImageBroken> = (
  args: ImageBrokenPropsI
) => (
  <Box display="flex" gap="20px">
    <ImageBroken {...args} />
    <ImageBroken {...args} fill="red.500" />
    <ImageBroken {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
