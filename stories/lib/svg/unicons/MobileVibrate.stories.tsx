import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MobileVibrate, MobileVibratePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MobileVibrate",
  component: MobileVibrate,
} as ComponentMeta<typeof MobileVibrate>;

const Template: ComponentStory<typeof MobileVibrate> = (
  args: MobileVibratePropsI
) => (
  <x.div display="flex" gap="20px">
    <MobileVibrate {...args} />
    <MobileVibrate {...args} fill="red.500" />
    <MobileVibrate {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
