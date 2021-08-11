import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSlash, CloudSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSlash",
  component: CloudSlash,
} as ComponentMeta<typeof CloudSlash>;

const Template: ComponentStory<typeof CloudSlash> = (
  args: CloudSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudSlash {...args} />
    <CloudSlash {...args} fill="red.500" />
    <CloudSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
