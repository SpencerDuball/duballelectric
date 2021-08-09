import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WifiSlash, WifiSlashPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WifiSlash",
  component: WifiSlash,
} as ComponentMeta<typeof WifiSlash>;

const Template: ComponentStory<typeof WifiSlash> = (args: WifiSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <WifiSlash {...args} />
    <WifiSlash {...args} fill="red.500" />
    <WifiSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
