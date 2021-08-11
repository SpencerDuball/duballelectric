import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Telegram, TelegramPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Telegram",
  component: Telegram,
} as ComponentMeta<typeof Telegram>;

const Template: ComponentStory<typeof Telegram> = (args: TelegramPropsI) => (
  <Box display="flex" gap="20px">
    <Telegram {...args} />
    <Telegram {...args} fill="red.500" />
    <Telegram {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
