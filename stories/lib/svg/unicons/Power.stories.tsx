import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Power, PowerPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Power",
  component: Power,
} as ComponentMeta<typeof Power>;

const Template: ComponentStory<typeof Power> = (args: PowerPropsI) => (
  <x.div display="flex" gap="20px">
    <Power {...args} />
    <Power {...args} fill="red.500" />
    <Power {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
