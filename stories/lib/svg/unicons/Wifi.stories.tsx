import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Wifi, WifiPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Wifi",
  component: Wifi,
} as ComponentMeta<typeof Wifi>;

const Template: ComponentStory<typeof Wifi> = (args: WifiPropsI) => (
  <x.div display="flex" gap="20px">
    <Wifi {...args} />
    <Wifi {...args} fill="red.500" />
    <Wifi {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
