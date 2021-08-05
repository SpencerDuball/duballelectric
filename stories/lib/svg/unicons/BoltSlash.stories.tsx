import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BoltSlash, BoltSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BoltSlash",
  component: BoltSlash,
} as ComponentMeta<typeof BoltSlash>;

const Template: ComponentStory<typeof BoltSlash> = (args: BoltSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <BoltSlash {...args} />
    <BoltSlash {...args} fill="red.500" />
    <BoltSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
