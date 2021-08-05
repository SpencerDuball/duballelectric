import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SmileDizzy, SmileDizzyPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SmileDizzy",
  component: SmileDizzy,
} as ComponentMeta<typeof SmileDizzy>;

const Template: ComponentStory<typeof SmileDizzy> = (
  args: SmileDizzyPropsI
) => (
  <x.div display="flex" gap="20px">
    <SmileDizzy {...args} />
    <SmileDizzy {...args} fill="red.500" />
    <SmileDizzy {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
