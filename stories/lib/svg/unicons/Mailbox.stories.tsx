import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Mailbox, MailboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Mailbox",
  component: Mailbox,
} as ComponentMeta<typeof Mailbox>;

const Template: ComponentStory<typeof Mailbox> = (args: MailboxPropsI) => (
  <x.div display="flex" gap="20px">
    <Mailbox {...args} />
    <Mailbox {...args} fill="red.500" />
    <Mailbox {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
