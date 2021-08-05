import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Apps, AppsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Apps",
  component: Apps,
} as ComponentMeta<typeof Apps>;

const Template: ComponentStory<typeof Apps> = (args: AppsPropsI) => (
  <x.div display="flex" gap="20px">
    <Apps {...args} />
    <Apps {...args} fill="red.500" />
    <Apps {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
