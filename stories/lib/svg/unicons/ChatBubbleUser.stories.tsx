import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChatBubbleUser, ChatBubbleUserPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChatBubbleUser",
  component: ChatBubbleUser,
} as ComponentMeta<typeof ChatBubbleUser>;

const Template: ComponentStory<typeof ChatBubbleUser> = (
  args: ChatBubbleUserPropsI
) => (
  <x.div display="flex" gap="20px">
    <ChatBubbleUser {...args} />
    <ChatBubbleUser {...args} fill="red.500" />
    <ChatBubbleUser {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
