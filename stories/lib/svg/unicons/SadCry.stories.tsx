import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SadCry, SadCryPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SadCry",
  component: SadCry,
} as ComponentMeta<typeof SadCry>;

const Template: ComponentStory<typeof SadCry> = (args: SadCryPropsI) => (
  <x.div display="flex" gap="20px">
    <SadCry {...args} />
    <SadCry {...args} fill="red.500" />
    <SadCry {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
