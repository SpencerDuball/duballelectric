import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SignLeft, SignLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignLeft",
  component: SignLeft,
} as ComponentMeta<typeof SignLeft>;

const Template: ComponentStory<typeof SignLeft> = (args: SignLeftPropsI) => (
  <x.div display="flex" gap="20px">
    <SignLeft {...args} />
    <SignLeft {...args} fill="red.500" />
    <SignLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
