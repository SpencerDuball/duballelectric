import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ToggleOff, ToggleOffPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ToggleOff",
  component: ToggleOff,
} as ComponentMeta<typeof ToggleOff>;

const Template: ComponentStory<typeof ToggleOff> = (args: ToggleOffPropsI) => (
  <x.div display="flex" gap="20px">
    <ToggleOff {...args} />
    <ToggleOff {...args} fill="red.500" />
    <ToggleOff {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
