import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Estate, EstatePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Estate",
  component: Estate,
} as ComponentMeta<typeof Estate>;

const Template: ComponentStory<typeof Estate> = (args: EstatePropsI) => (
  <x.div display="flex" gap="20px">
    <Estate {...args} />
    <Estate {...args} fill="red.500" />
    <Estate {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
