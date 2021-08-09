import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FastMail, FastMailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FastMail",
  component: FastMail,
} as ComponentMeta<typeof FastMail>;

const Template: ComponentStory<typeof FastMail> = (args: FastMailPropsI) => (
  <x.div display="flex" gap="20px">
    <FastMail {...args} />
    <FastMail {...args} fill="red.500" />
    <FastMail {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
