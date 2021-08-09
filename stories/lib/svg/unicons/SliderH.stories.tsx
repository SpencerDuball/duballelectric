import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SliderH, SliderHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SliderH",
  component: SliderH,
} as ComponentMeta<typeof SliderH>;

const Template: ComponentStory<typeof SliderH> = (args: SliderHPropsI) => (
  <x.div display="flex" gap="20px">
    <SliderH {...args} />
    <SliderH {...args} fill="red.500" />
    <SliderH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
