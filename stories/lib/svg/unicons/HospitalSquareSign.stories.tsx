import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HospitalSquareSign, HospitalSquareSignPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HospitalSquareSign",
  component: HospitalSquareSign,
} as ComponentMeta<typeof HospitalSquareSign>;

const Template: ComponentStory<typeof HospitalSquareSign> = (
  args: HospitalSquareSignPropsI
) => (
  <x.div display="flex" gap="20px">
    <HospitalSquareSign {...args} />
    <HospitalSquareSign {...args} fill="red.500" />
    <HospitalSquareSign {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
