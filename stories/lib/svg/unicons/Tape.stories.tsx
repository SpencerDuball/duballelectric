import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Tape, TapePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Tape",
  component: Tape,
} as ComponentMeta<typeof Tape>;

const Template: ComponentStory<typeof Tape> = (args: TapePropsI) => (
  <x.div display="flex" gap="20px">
    <Tape {...args} />
    <Tape {...args} fill="red.500" />
    <Tape {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
