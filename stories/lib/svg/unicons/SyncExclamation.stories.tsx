import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SyncExclamation, SyncExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SyncExclamation",
  component: SyncExclamation,
} as ComponentMeta<typeof SyncExclamation>;

const Template: ComponentStory<typeof SyncExclamation> = (
  args: SyncExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <SyncExclamation {...args} />
    <SyncExclamation {...args} fill="red.500" />
    <SyncExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
