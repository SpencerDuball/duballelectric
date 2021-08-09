import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { At, AtPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/At",
  component: At,
} as ComponentMeta<typeof At>;

const Template: ComponentStory<typeof At> = (args: AtPropsI) => (
  <x.div display="flex" gap="20px">
    <At {...args} />
    <At {...args} fill="red.500" />
    <At {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
