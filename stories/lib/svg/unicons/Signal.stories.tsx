import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Signal, SignalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Signal",
  component: Signal,
} as ComponentMeta<typeof Signal>;

const Template: ComponentStory<typeof Signal> = (args: SignalPropsI) => (
  <x.div display="flex" gap="20px">
    <Signal {...args} />
    <Signal {...args} fill="red.500" />
    <Signal {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
