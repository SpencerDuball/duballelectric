import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MedicalDrip, MedicalDripPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MedicalDrip",
  component: MedicalDrip,
} as ComponentMeta<typeof MedicalDrip>;

const Template: ComponentStory<typeof MedicalDrip> = (
  args: MedicalDripPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MedicalDrip {...args} />
    <MedicalDrip {...args} fill="red.500" />
    <MedicalDrip {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
