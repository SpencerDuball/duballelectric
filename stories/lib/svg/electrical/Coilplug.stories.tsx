import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Coilplug, CoilplugPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Coilplug",
  component: Coilplug,
} as ComponentMeta<typeof Coilplug>;

const Template: ComponentStory<typeof Coilplug> = (args: CoilplugPropsI) => (
  <x.div display="flex" gap="20px">
    <Coilplug {...args} />
    <Coilplug {...args} fill="red.500" />
    <Coilplug {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
