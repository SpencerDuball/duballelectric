import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Padlock, PadlockPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Padlock",
  component: Padlock,
} as ComponentMeta<typeof Padlock>;

const Template: ComponentStory<typeof Padlock> = (args: PadlockPropsI) => (
  <x.div display="flex" gap="20px">
    <Padlock {...args} />
    <Padlock {...args} fill="red.500" />
    <Padlock {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
