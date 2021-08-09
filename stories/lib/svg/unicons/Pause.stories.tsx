import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pause, PausePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pause",
  component: Pause,
} as ComponentMeta<typeof Pause>;

const Template: ComponentStory<typeof Pause> = (args: PausePropsI) => (
  <x.div display="flex" gap="20px">
    <Pause {...args} />
    <Pause {...args} fill="red.500" />
    <Pause {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
