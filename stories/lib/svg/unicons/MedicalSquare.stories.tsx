import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MedicalSquare, MedicalSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MedicalSquare",
  component: MedicalSquare,
} as ComponentMeta<typeof MedicalSquare>;

const Template: ComponentStory<typeof MedicalSquare> = (
  args: MedicalSquarePropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MedicalSquare {...args} />
    <MedicalSquare {...args} fill="red.500" />
    <MedicalSquare {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
