import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Inbox, InboxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Inbox",
  component: Inbox,
} as ComponentMeta<typeof Inbox>;

const Template: ComponentStory<typeof Inbox> = (args: InboxPropsI) => (
  <x.div display="flex" gap="20px">
    <Inbox {...args} />
    <Inbox {...args} fill="red.500" />
    <Inbox {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
