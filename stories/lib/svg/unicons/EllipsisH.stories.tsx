import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EllipsisH, EllipsisHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/EllipsisH",
  component: EllipsisH,
} as ComponentMeta<typeof EllipsisH>;

const Template: ComponentStory<typeof EllipsisH> = (args: EllipsisHPropsI) => (
  <x.div display="flex" gap="20px">
    <EllipsisH {...args} />
    <EllipsisH {...args} fill="red.500" />
    <EllipsisH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
