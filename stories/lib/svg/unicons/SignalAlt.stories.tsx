import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignalAlt, SignalAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignalAlt",
  component: SignalAlt,
} as ComponentMeta<typeof SignalAlt>;

const Template: ComponentStory<typeof SignalAlt> = (args: SignalAltPropsI) => (
  <x.div display="flex" gap="20px">
    <SignalAlt {...args} />
    <SignalAlt {...args} fill="red.500" />
    <SignalAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
