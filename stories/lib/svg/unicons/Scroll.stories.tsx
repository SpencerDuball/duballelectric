import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Scroll, ScrollPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Scroll",
  component: Scroll,
} as ComponentMeta<typeof Scroll>;

const Template: ComponentStory<typeof Scroll> = (args: ScrollPropsI) => (
  <x.div display="flex" gap="20px">
    <Scroll {...args} />
    <Scroll {...args} fill="red.500" />
    <Scroll {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
