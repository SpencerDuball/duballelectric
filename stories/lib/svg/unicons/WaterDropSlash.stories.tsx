import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WaterDropSlash, WaterDropSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WaterDropSlash",
  component: WaterDropSlash,
} as ComponentMeta<typeof WaterDropSlash>;

const Template: ComponentStory<typeof WaterDropSlash> = (
  args: WaterDropSlashPropsI
) => (
  <Box display="flex" gap="20px">
    <WaterDropSlash {...args} />
    <WaterDropSlash {...args} fill="red.500" />
    <WaterDropSlash {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
