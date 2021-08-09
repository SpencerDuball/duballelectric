import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ToggleOn, ToggleOnPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ToggleOn",
  component: ToggleOn,
} as ComponentMeta<typeof ToggleOn>;

const Template: ComponentStory<typeof ToggleOn> = (args: ToggleOnPropsI) => (
  <x.div display="flex" gap="20px">
    <ToggleOn {...args} />
    <ToggleOn {...args} fill="red.500" />
    <ToggleOn {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
