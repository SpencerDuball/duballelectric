import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Html3Alt, Html3AltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Html3Alt",
  component: Html3Alt,
} as ComponentMeta<typeof Html3Alt>;

const Template: ComponentStory<typeof Html3Alt> = (args: Html3AltPropsI) => (
  <x.div display="flex" gap="20px">
    <Html3Alt {...args} />
    <Html3Alt {...args} fill="red.500" />
    <Html3Alt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
