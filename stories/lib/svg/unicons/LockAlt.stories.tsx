import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { LockAlt, LockAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/LockAlt",
  component: LockAlt,
} as ComponentMeta<typeof LockAlt>;

const Template: ComponentStory<typeof LockAlt> = (args: LockAltPropsI) => (
  <x.div display="flex" gap="20px">
    <LockAlt {...args} />
    <LockAlt {...args} fill="red.500" />
    <LockAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
