import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudLock, CloudLockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudLock",
  component: CloudLock,
} as ComponentMeta<typeof CloudLock>;

const Template: ComponentStory<typeof CloudLock> = (args: CloudLockPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudLock {...args} />
    <CloudLock {...args} fill="red.500" />
    <CloudLock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
