import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Rainbow, RainbowPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Rainbow",
  component: Rainbow,
} as ComponentMeta<typeof Rainbow>;

const Template: ComponentStory<typeof Rainbow> = (args: RainbowPropsI) => (
  <x.div display="flex" gap="20px">
    <Rainbow {...args} />
    <Rainbow {...args} fill="red.500" />
    <Rainbow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
