import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BorderOut, BorderOutPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/BorderOut",
  component: BorderOut,
} as ComponentMeta<typeof BorderOut>;

const Template: ComponentStory<typeof BorderOut> = (args: BorderOutPropsI) => (
  <x.div display="flex" gap="20px">
    <BorderOut {...args} />
    <BorderOut {...args} fill="red.500" />
    <BorderOut {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
