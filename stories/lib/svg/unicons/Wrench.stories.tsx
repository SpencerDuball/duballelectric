import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Wrench, WrenchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Wrench",
  component: Wrench,
} as ComponentMeta<typeof Wrench>;

const Template: ComponentStory<typeof Wrench> = (args: WrenchPropsI) => (
  <x.div display="flex" gap="20px">
    <Wrench {...args} />
    <Wrench {...args} fill="red.500" />
    <Wrench {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
