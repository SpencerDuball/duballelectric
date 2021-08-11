import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ClinicMedical, ClinicMedicalPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ClinicMedical",
  component: ClinicMedical,
} as ComponentMeta<typeof ClinicMedical>;

const Template: ComponentStory<typeof ClinicMedical> = (
  args: ClinicMedicalPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ClinicMedical {...args} />
    <ClinicMedical {...args} fill="red.500" />
    <ClinicMedical {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
