import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Fire, FirePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Fire",
  component: Fire,
} as ComponentMeta<typeof Fire>;

const Template: ComponentStory<typeof Fire> = (args: FirePropsI) => (
  <x.div display="flex" gap="20px">
    <Fire {...args} />
    <Fire {...args} fill="red.500" />
    <Fire {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
