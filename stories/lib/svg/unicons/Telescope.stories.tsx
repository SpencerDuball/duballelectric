import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Telescope, TelescopePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Telescope",
  component: Telescope,
} as ComponentMeta<typeof Telescope>;

const Template: ComponentStory<typeof Telescope> = (args: TelescopePropsI) => (
  <x.div display="flex" gap="20px">
    <Telescope {...args} />
    <Telescope {...args} fill="red.500" />
    <Telescope {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
