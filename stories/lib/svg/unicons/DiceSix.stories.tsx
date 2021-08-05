import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DiceSix, DiceSixPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DiceSix",
  component: DiceSix,
} as ComponentMeta<typeof DiceSix>;

const Template: ComponentStory<typeof DiceSix> = (args: DiceSixPropsI) => (
  <x.div display="flex" gap="20px">
    <DiceSix {...args} />
    <DiceSix {...args} fill="red.500" />
    <DiceSix {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
