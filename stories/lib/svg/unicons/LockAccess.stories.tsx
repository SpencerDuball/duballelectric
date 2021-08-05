import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LockAccess, LockAccessPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LockAccess",
  component: LockAccess,
} as ComponentMeta<typeof LockAccess>;

const Template: ComponentStory<typeof LockAccess> = (
  args: LockAccessPropsI
) => (
  <x.div display="flex" gap="20px">
    <LockAccess {...args} />
    <LockAccess {...args} fill="red.500" />
    <LockAccess {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
