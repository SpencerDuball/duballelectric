import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Emoji, EmojiPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Emoji",
  component: Emoji,
} as ComponentMeta<typeof Emoji>;

const Template: ComponentStory<typeof Emoji> = (args: EmojiPropsI) => (
  <Box display="flex" gap="20px">
    <Emoji {...args} />
    <Emoji {...args} fill="red.500" />
    <Emoji {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
