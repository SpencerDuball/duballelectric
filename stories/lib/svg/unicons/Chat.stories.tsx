import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Chat, ChatPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args: ChatPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Chat {...args} />
    <Chat {...args} fill="red.500" />
    <Chat {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
