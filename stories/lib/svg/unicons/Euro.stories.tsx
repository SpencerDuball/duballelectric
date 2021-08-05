import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Euro, EuroPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Euro",
  component: Euro,
} as ComponentMeta<typeof Euro>;

const Template: ComponentStory<typeof Euro> = (args: EuroPropsI) => (
  <x.div display="flex" gap="20px">
    <Euro {...args} />
    <Euro {...args} fill="red.500" />
    <Euro {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
