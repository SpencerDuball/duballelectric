import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sad, SadPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sad",
  component: Sad,
} as ComponentMeta<typeof Sad>;

const Template: ComponentStory<typeof Sad> = (args: SadPropsI) => (
  <x.div display="flex" gap="20px">
    <Sad {...args} />
    <Sad {...args} fill="red.500" />
    <Sad {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
