import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ShieldExclamation, ShieldExclamationPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ShieldExclamation",
  component: ShieldExclamation,
} as ComponentMeta<typeof ShieldExclamation>;

const Template: ComponentStory<typeof ShieldExclamation> = (
  args: ShieldExclamationPropsI
) => (
  <x.div display="flex" gap="20px">
    <ShieldExclamation {...args} />
    <ShieldExclamation {...args} fill="red.500" />
    <ShieldExclamation {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
