import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AutoFlash, AutoFlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AutoFlash",
  component: AutoFlash,
} as ComponentMeta<typeof AutoFlash>;

const Template: ComponentStory<typeof AutoFlash> = (args: AutoFlashPropsI) => (
  <x.div display="flex" gap="20px">
    <AutoFlash {...args} />
    <AutoFlash {...args} fill="red.500" />
    <AutoFlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
