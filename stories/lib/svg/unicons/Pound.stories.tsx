import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pound, PoundPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pound",
  component: Pound,
} as ComponentMeta<typeof Pound>;

const Template: ComponentStory<typeof Pound> = (args: PoundPropsI) => (
  <x.div display="flex" gap="20px">
    <Pound {...args} />
    <Pound {...args} fill="red.500" />
    <Pound {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
