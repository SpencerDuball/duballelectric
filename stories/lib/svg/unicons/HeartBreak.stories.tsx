import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { HeartBreak, HeartBreakPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/HeartBreak",
  component: HeartBreak,
} as ComponentMeta<typeof HeartBreak>;

const Template: ComponentStory<typeof HeartBreak> = (
  args: HeartBreakPropsI
) => (
  <Box display="flex" gap="20px">
    <HeartBreak {...args} />
    <HeartBreak {...args} fill="red.500" />
    <HeartBreak {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
