import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignCenterH, AlignCenterHPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenterH",
  component: AlignCenterH,
} as ComponentMeta<typeof AlignCenterH>;

const Template: ComponentStory<typeof AlignCenterH> = (
  args: AlignCenterHPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignCenterH {...args} />
    <AlignCenterH {...args} fill="red.500" />
    <AlignCenterH {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
