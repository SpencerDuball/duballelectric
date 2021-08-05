import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WheelBarrow, WheelBarrowPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WheelBarrow",
  component: WheelBarrow,
} as ComponentMeta<typeof WheelBarrow>;

const Template: ComponentStory<typeof WheelBarrow> = (
  args: WheelBarrowPropsI
) => (
  <x.div display="flex" gap="20px">
    <WheelBarrow {...args} />
    <WheelBarrow {...args} fill="red.500" />
    <WheelBarrow {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
