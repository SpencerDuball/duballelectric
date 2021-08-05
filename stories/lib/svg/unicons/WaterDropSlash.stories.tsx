import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WaterDropSlash, WaterDropSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WaterDropSlash",
  component: WaterDropSlash,
} as ComponentMeta<typeof WaterDropSlash>;

const Template: ComponentStory<typeof WaterDropSlash> = (
  args: WaterDropSlashPropsI
) => (
  <x.div display="flex" gap="20px">
    <WaterDropSlash {...args} />
    <WaterDropSlash {...args} fill="red.500" />
    <WaterDropSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
