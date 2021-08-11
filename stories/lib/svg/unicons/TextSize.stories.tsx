import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TextSize, TextSizePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TextSize",
  component: TextSize,
} as ComponentMeta<typeof TextSize>;

const Template: ComponentStory<typeof TextSize> = (args: TextSizePropsI) => (
  <Box display="flex" gap="20px">
    <TextSize {...args} />
    <TextSize {...args} fill="red.500" />
    <TextSize {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
