import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Process, ProcessPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Process",
  component: Process,
} as ComponentMeta<typeof Process>;

const Template: ComponentStory<typeof Process> = (args: ProcessPropsI) => (
  <x.div display="flex" gap="20px">
    <Process {...args} />
    <Process {...args} fill="red.500" />
    <Process {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
