import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ruler, RulerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ruler",
  component: Ruler,
} as ComponentMeta<typeof Ruler>;

const Template: ComponentStory<typeof Ruler> = (args: RulerPropsI) => (
  <x.div display="flex" gap="20px">
    <Ruler {...args} />
    <Ruler {...args} fill="red.500" />
    <Ruler {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
