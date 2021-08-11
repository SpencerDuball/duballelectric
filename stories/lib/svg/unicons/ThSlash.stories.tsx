import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ThSlash, ThSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThSlash",
  component: ThSlash,
} as ComponentMeta<typeof ThSlash>;

const Template: ComponentStory<typeof ThSlash> = (args: ThSlashPropsI) => (
  <Box display="flex" gap="20px">
    <ThSlash {...args} />
    <ThSlash {...args} fill="red.500" />
    <ThSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
