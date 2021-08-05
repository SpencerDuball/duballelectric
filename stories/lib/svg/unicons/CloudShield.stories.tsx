import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudShield, CloudShieldPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudShield",
  component: CloudShield,
} as ComponentMeta<typeof CloudShield>;

const Template: ComponentStory<typeof CloudShield> = (
  args: CloudShieldPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudShield {...args} />
    <CloudShield {...args} fill="red.500" />
    <CloudShield {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
