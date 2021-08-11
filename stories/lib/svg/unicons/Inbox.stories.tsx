import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Inbox, InboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Inbox",
  component: Inbox,
} as ComponentMeta<typeof Inbox>;

const Template: ComponentStory<typeof Inbox> = (args: InboxPropsI) => (
  <Box display="flex" gap="20px">
    <Inbox {...args} />
    <Inbox {...args} fill="red.500" />
    <Inbox {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
