import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HardhatMan, HardhatManPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/HardhatMan",
  component: HardhatMan,
} as ComponentMeta<typeof HardhatMan>;

const Template: ComponentStory<typeof HardhatMan> = (
  args: HardhatManPropsI
) => (
  <x.div display="flex" gap="20px">
    <HardhatMan {...args} />
    <HardhatMan {...args} fill="red.500" />
    <HardhatMan {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
