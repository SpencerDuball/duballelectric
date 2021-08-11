import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PostStamp, PostStampPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PostStamp",
  component: PostStamp,
} as ComponentMeta<typeof PostStamp>;

const Template: ComponentStory<typeof PostStamp> = (args: PostStampPropsI) => (
  <Box display="flex" gap="20px">
    <PostStamp {...args} />
    <PostStamp {...args} fill="red.500" />
    <PostStamp {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
