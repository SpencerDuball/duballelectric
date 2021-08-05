import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SyncSlash, SyncSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SyncSlash",
  component: SyncSlash,
} as ComponentMeta<typeof SyncSlash>;

const Template: ComponentStory<typeof SyncSlash> = (args: SyncSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <SyncSlash {...args} />
    <SyncSlash {...args} fill="red.500" />
    <SyncSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
