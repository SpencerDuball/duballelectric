import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Navigator, NavigatorPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Navigator",
  component: Navigator,
} as ComponentMeta<typeof Navigator>;

const Template: ComponentStory<typeof Navigator> = (args: NavigatorPropsI) => (
  <x.div display="flex" gap="20px">
    <Navigator {...args} />
    <Navigator {...args} fill="red.500" />
    <Navigator {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
