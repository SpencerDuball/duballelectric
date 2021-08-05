import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BagSlash, BagSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BagSlash",
  component: BagSlash,
} as ComponentMeta<typeof BagSlash>;

const Template: ComponentStory<typeof BagSlash> = (args: BagSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <BagSlash {...args} />
    <BagSlash {...args} fill="red.500" />
    <BagSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
