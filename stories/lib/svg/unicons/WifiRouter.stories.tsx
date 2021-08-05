import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WifiRouter, WifiRouterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WifiRouter",
  component: WifiRouter,
} as ComponentMeta<typeof WifiRouter>;

const Template: ComponentStory<typeof WifiRouter> = (
  args: WifiRouterPropsI
) => (
  <x.div display="flex" gap="20px">
    <WifiRouter {...args} />
    <WifiRouter {...args} fill="red.500" />
    <WifiRouter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
