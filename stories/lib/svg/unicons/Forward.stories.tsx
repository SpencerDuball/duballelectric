import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Forward, ForwardPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Forward",
  component: Forward,
} as ComponentMeta<typeof Forward>;

const Template: ComponentStory<typeof Forward> = (args: ForwardPropsI) => (
  <x.div display="flex" gap="20px">
    <Forward {...args} />
    <Forward {...args} fill="red.500" />
    <Forward {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
