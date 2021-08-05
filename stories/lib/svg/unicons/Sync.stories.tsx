import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sync, SyncPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sync",
  component: Sync,
} as ComponentMeta<typeof Sync>;

const Template: ComponentStory<typeof Sync> = (args: SyncPropsI) => (
  <x.div display="flex" gap="20px">
    <Sync {...args} />
    <Sync {...args} fill="red.500" />
    <Sync {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
