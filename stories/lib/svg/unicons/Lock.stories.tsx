import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Lock, LockPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Lock",
  component: Lock,
} as ComponentMeta<typeof Lock>;

const Template: ComponentStory<typeof Lock> = (args: LockPropsI) => (
  <x.div display="flex" gap="20px">
    <Lock {...args} />
    <Lock {...args} fill="red.500" />
    <Lock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
