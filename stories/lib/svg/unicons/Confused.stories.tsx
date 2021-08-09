import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Confused, ConfusedPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Confused",
  component: Confused,
} as ComponentMeta<typeof Confused>;

const Template: ComponentStory<typeof Confused> = (args: ConfusedPropsI) => (
  <x.div display="flex" gap="20px">
    <Confused {...args} />
    <Confused {...args} fill="red.500" />
    <Confused {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
