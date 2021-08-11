import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GrinTongueWink, GrinTongueWinkPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GrinTongueWink",
  component: GrinTongueWink,
} as ComponentMeta<typeof GrinTongueWink>;

const Template: ComponentStory<typeof GrinTongueWink> = (
  args: GrinTongueWinkPropsI
) => (
  <Box display="flex" gap="20px">
    <GrinTongueWink {...args} />
    <GrinTongueWink {...args} fill="red.500" />
    <GrinTongueWink {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
