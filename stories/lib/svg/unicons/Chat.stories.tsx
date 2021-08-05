import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Chat, ChatPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args: ChatPropsI) => (
  <x.div display="flex" gap="20px">
    <Chat {...args} />
    <Chat {...args} fill="red.500" />
    <Chat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
