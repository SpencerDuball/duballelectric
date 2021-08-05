import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShieldSlash, ShieldSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ShieldSlash",
  component: ShieldSlash,
} as ComponentMeta<typeof ShieldSlash>;

const Template: ComponentStory<typeof ShieldSlash> = (
  args: ShieldSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShieldSlash {...args} />
    <ShieldSlash {...args} fill="red.500" />
    <ShieldSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
