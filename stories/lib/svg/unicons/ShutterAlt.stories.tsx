import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShutterAlt, ShutterAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ShutterAlt",
  component: ShutterAlt,
} as ComponentMeta<typeof ShutterAlt>;

const Template: ComponentStory<typeof ShutterAlt> = (
  args: ShutterAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShutterAlt {...args} />
    <ShutterAlt {...args} fill="red.500" />
    <ShutterAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
