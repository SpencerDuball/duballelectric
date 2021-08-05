import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignInAlt, SignInAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SignInAlt",
  component: SignInAlt,
} as ComponentMeta<typeof SignInAlt>;

const Template: ComponentStory<typeof SignInAlt> = (args: SignInAltPropsI) => (
  <x.div display="flex" gap="20px">
    <SignInAlt {...args} />
    <SignInAlt {...args} fill="red.500" />
    <SignInAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
