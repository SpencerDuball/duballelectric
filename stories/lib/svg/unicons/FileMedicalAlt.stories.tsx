import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileMedicalAlt, FileMedicalAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FileMedicalAlt",
  component: FileMedicalAlt,
} as ComponentMeta<typeof FileMedicalAlt>;

const Template: ComponentStory<typeof FileMedicalAlt> = (
  args: FileMedicalAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileMedicalAlt {...args} />
    <FileMedicalAlt {...args} fill="red.500" />
    <FileMedicalAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
