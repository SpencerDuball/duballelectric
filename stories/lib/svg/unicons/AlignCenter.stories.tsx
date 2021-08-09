import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignCenter, AlignCenterPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AlignCenter",
  component: AlignCenter,
} as ComponentMeta<typeof AlignCenter>;

const Template: ComponentStory<typeof AlignCenter> = (
  args: AlignCenterPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignCenter {...args} />
    <AlignCenter {...args} fill="red.500" />
    <AlignCenter {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
