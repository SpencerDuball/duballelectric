import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Mailbox, MailboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Mailbox",
  component: Mailbox,
} as ComponentMeta<typeof Mailbox>;

const Template: ComponentStory<typeof Mailbox> = (args: MailboxPropsI) => (
  <Box display="flex" gap="20px">
    <Mailbox {...args} />
    <Mailbox {...args} fill="red.500" />
    <Mailbox {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
