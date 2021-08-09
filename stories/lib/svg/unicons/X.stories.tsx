import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { X, XPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/X",
  component: X,
} as ComponentMeta<typeof X>;

const Template: ComponentStory<typeof X> = (args: XPropsI) => (
  <x.div display="flex" gap="20px">
    <X {...args} />
    <X {...args} fill="red.500" />
    <X {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
