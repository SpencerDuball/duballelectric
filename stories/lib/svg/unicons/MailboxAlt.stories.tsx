import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MailboxAlt, MailboxAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MailboxAlt",
  component: MailboxAlt,
} as ComponentMeta<typeof MailboxAlt>;

const Template: ComponentStory<typeof MailboxAlt> = (
  args: MailboxAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <MailboxAlt {...args} />
    <MailboxAlt {...args} fill="red.500" />
    <MailboxAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
