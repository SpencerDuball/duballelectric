import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ClinicMedical, ClinicMedicalPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/ClinicMedical",
  component: ClinicMedical,
} as ComponentMeta<typeof ClinicMedical>;

const Template: ComponentStory<typeof ClinicMedical> = (
  args: ClinicMedicalPropsI
) => (
  <x.div display="flex" gap="20px">
    <ClinicMedical {...args} />
    <ClinicMedical {...args} fill="red.500" />
    <ClinicMedical {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
