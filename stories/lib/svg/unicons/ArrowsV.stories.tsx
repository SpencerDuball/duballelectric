import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsV, ArrowsVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsV",
  component: ArrowsV,
} as ComponentMeta<typeof ArrowsV>;

const Template: ComponentStory<typeof ArrowsV> = (args: ArrowsVPropsI) => (
  <x.div display="flex" gap="20px">
    <ArrowsV {...args} />
    <ArrowsV {...args} fill="red.500" />
    <ArrowsV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
