import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BloggerAlt, BloggerAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BloggerAlt",
  component: BloggerAlt,
} as ComponentMeta<typeof BloggerAlt>;

const Template: ComponentStory<typeof BloggerAlt> = (
  args: BloggerAltPropsI
) => (
  <Box display="flex" gap="20px">
    <BloggerAlt {...args} />
    <BloggerAlt {...args} fill="red.500" />
    <BloggerAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
