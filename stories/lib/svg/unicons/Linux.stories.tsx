import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Linux, LinuxPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Linux",
  component: Linux,
} as ComponentMeta<typeof Linux>;

const Template: ComponentStory<typeof Linux> = (args: LinuxPropsI) => (
  <x.div display="flex" gap="20px">
    <Linux {...args} />
    <Linux {...args} fill="red.500" />
    <Linux {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
