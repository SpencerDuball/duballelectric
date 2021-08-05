import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bolt, BoltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Bolt",
  component: Bolt,
} as ComponentMeta<typeof Bolt>;

const Template: ComponentStory<typeof Bolt> = (args: BoltPropsI) => (
  <x.div display="flex" gap="20px">
    <Bolt {...args} />
    <Bolt {...args} fill="red.500" />
    <Bolt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
