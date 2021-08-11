import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FileMedicalAlt, FileMedicalAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileMedicalAlt",
  component: FileMedicalAlt,
} as ComponentMeta<typeof FileMedicalAlt>;

const Template: ComponentStory<typeof FileMedicalAlt> = (
  args: FileMedicalAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FileMedicalAlt {...args} />
    <FileMedicalAlt {...args} fill="red.500" />
    <FileMedicalAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
