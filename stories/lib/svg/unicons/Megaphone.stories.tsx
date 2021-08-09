import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Megaphone, MegaphonePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Megaphone",
  component: Megaphone,
} as ComponentMeta<typeof Megaphone>;

const Template: ComponentStory<typeof Megaphone> = (args: MegaphonePropsI) => (
  <x.div display="flex" gap="20px">
    <Megaphone {...args} />
    <Megaphone {...args} fill="red.500" />
    <Megaphone {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
