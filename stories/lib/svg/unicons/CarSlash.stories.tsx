import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CarSlash, CarSlashPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CarSlash",
  component: CarSlash,
} as ComponentMeta<typeof CarSlash>;

const Template: ComponentStory<typeof CarSlash> = (args: CarSlashPropsI) => (
  <x.div display="flex" gap="20px">
    <CarSlash {...args} />
    <CarSlash {...args} fill="red.500" />
    <CarSlash {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
