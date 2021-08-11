import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { PrescriptionBottle, PrescriptionBottlePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PrescriptionBottle",
  component: PrescriptionBottle,
} as ComponentMeta<typeof PrescriptionBottle>;

const Template: ComponentStory<typeof PrescriptionBottle> = (
  args: PrescriptionBottlePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <PrescriptionBottle {...args} />
    <PrescriptionBottle {...args} fill="red.500" />
    <PrescriptionBottle {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
