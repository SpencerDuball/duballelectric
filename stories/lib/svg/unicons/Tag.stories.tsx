import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Tag, TagPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: TagPropsI) => (
  <Box display="flex" gap="20px">
    <Tag {...args} />
    <Tag {...args} fill="red.500" />
    <Tag {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
