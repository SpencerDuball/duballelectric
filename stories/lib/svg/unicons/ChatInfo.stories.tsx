import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ChatInfo, ChatInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChatInfo",
  component: ChatInfo,
} as ComponentMeta<typeof ChatInfo>;

const Template: ComponentStory<typeof ChatInfo> = (args: ChatInfoPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <ChatInfo {...args} />
    <ChatInfo {...args} fill="red.500" />
    <ChatInfo {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
