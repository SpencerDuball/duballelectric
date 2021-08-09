import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Spin, SpinPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Spin",
  component: Spin,
} as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = (args: SpinPropsI) => (
  <x.div display="flex" gap="20px">
    <Spin {...args} />
    <Spin {...args} fill="red.500" />
    <Spin {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
