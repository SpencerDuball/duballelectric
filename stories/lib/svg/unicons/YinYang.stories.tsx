import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { YinYang, YinYangPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/YinYang",
  component: YinYang,
} as ComponentMeta<typeof YinYang>;

const Template: ComponentStory<typeof YinYang> = (args: YinYangPropsI) => (
  <x.div display="flex" gap="20px">
    <YinYang {...args} />
    <YinYang {...args} fill="red.500" />
    <YinYang {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
