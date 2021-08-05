import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BlackBerry, BlackBerryPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BlackBerry",
  component: BlackBerry,
} as ComponentMeta<typeof BlackBerry>;

const Template: ComponentStory<typeof BlackBerry> = (
  args: BlackBerryPropsI
) => (
  <x.div display="flex" gap="20px">
    <BlackBerry {...args} />
    <BlackBerry {...args} fill="red.500" />
    <BlackBerry {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
