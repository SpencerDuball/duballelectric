import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ChatInfo, ChatInfoPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ChatInfo",
  component: ChatInfo,
} as ComponentMeta<typeof ChatInfo>;

const Template: ComponentStory<typeof ChatInfo> = (args: ChatInfoPropsI) => (
  <x.div display="flex" gap="20px">
    <ChatInfo {...args} />
    <ChatInfo {...args} fill="red.500" />
    <ChatInfo {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
