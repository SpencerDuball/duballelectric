import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AlignCenterAlt, AlignCenterAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AlignCenterAlt",
  component: AlignCenterAlt,
} as ComponentMeta<typeof AlignCenterAlt>;

const Template: ComponentStory<typeof AlignCenterAlt> = (
  args: AlignCenterAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <AlignCenterAlt {...args} />
    <AlignCenterAlt {...args} fill="red.500" />
    <AlignCenterAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
