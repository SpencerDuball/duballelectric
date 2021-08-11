import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GraduationCap, GraduationCapPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GraduationCap",
  component: GraduationCap,
} as ComponentMeta<typeof GraduationCap>;

const Template: ComponentStory<typeof GraduationCap> = (
  args: GraduationCapPropsI
) => (
  <Box display="flex" gap="20px">
    <GraduationCap {...args} />
    <GraduationCap {...args} fill="red.500" />
    <GraduationCap {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
