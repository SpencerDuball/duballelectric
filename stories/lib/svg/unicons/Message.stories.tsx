import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Message, MessagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Message",
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args: MessagePropsI) => (
  <x.div display="flex" gap="20px">
    <Message {...args} />
    <Message {...args} fill="red.500" />
    <Message {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
