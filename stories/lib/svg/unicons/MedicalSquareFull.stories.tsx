import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MedicalSquareFull, MedicalSquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MedicalSquareFull",
  component: MedicalSquareFull,
} as ComponentMeta<typeof MedicalSquareFull>;

const Template: ComponentStory<typeof MedicalSquareFull> = (
  args: MedicalSquareFullPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <MedicalSquareFull {...args} />
    <MedicalSquareFull {...args} fill="red.500" />
    <MedicalSquareFull {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
