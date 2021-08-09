import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignalAlt3, SignalAlt3PropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignalAlt3",
  component: SignalAlt3,
} as ComponentMeta<typeof SignalAlt3>;

const Template: ComponentStory<typeof SignalAlt3> = (
  args: SignalAlt3PropsI
) => (
  <x.div display="flex" gap="20px">
    <SignalAlt3 {...args} />
    <SignalAlt3 {...args} fill="red.500" />
    <SignalAlt3 {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
