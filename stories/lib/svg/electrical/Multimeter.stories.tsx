import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Multimeter, MultimeterPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/Multimeter",
  component: Multimeter,
} as ComponentMeta<typeof Multimeter>;

const Template: ComponentStory<typeof Multimeter> = (
  args: MultimeterPropsI
) => (
  <x.div display="flex" gap="20px">
    <Multimeter {...args} />
    <Multimeter {...args} fill="red.500" />
    <Multimeter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
