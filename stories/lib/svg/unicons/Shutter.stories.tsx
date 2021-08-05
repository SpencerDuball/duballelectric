import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Shutter, ShutterPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Shutter",
  component: Shutter,
} as ComponentMeta<typeof Shutter>;

const Template: ComponentStory<typeof Shutter> = (args: ShutterPropsI) => (
  <x.div display="flex" gap="20px">
    <Shutter {...args} />
    <Shutter {...args} fill="red.500" />
    <Shutter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
