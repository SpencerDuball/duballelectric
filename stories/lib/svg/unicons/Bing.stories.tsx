import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Bing, BingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bing",
  component: Bing,
} as ComponentMeta<typeof Bing>;

const Template: ComponentStory<typeof Bing> = (args: BingPropsI) => (
  <x.div display="flex" gap="20px">
    <Bing {...args} />
    <Bing {...args} fill="red.500" />
    <Bing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
