import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MediumM, MediumMPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MediumM",
  component: MediumM,
} as ComponentMeta<typeof MediumM>;

const Template: ComponentStory<typeof MediumM> = (args: MediumMPropsI) => (
  <x.div display="flex" gap="20px">
    <MediumM {...args} />
    <MediumM {...args} fill="red.500" />
    <MediumM {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
