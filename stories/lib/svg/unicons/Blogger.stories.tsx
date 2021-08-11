import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Blogger, BloggerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Blogger",
  component: Blogger,
} as ComponentMeta<typeof Blogger>;

const Template: ComponentStory<typeof Blogger> = (args: BloggerPropsI) => (
  <Box display="flex" gap="20px">
    <Blogger {...args} />
    <Blogger {...args} fill="red.500" />
    <Blogger {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
