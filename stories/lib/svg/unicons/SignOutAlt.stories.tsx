import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignOutAlt, SignOutAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignOutAlt",
  component: SignOutAlt,
} as ComponentMeta<typeof SignOutAlt>;

const Template: ComponentStory<typeof SignOutAlt> = (
  args: SignOutAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <SignOutAlt {...args} />
    <SignOutAlt {...args} fill="red.500" />
    <SignOutAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
