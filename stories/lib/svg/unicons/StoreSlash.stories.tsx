import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { StoreSlash, StoreSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/StoreSlash",
  component: StoreSlash,
} as ComponentMeta<typeof StoreSlash>;

const Template: ComponentStory<typeof StoreSlash> = (
  args: StoreSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <StoreSlash {...args} />
    <StoreSlash {...args} fill="red.500" />
    <StoreSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
