import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignCenterV, AlignCenterVPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenterV",
  component: AlignCenterV,
} as ComponentMeta<typeof AlignCenterV>;

const Template: ComponentStory<typeof AlignCenterV> = (
  args: AlignCenterVPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignCenterV {...args} />
    <AlignCenterV {...args} fill="red.500" />
    <AlignCenterV {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
