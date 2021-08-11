import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BellSchool, BellSchoolPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BellSchool",
  component: BellSchool,
} as ComponentMeta<typeof BellSchool>;

const Template: ComponentStory<typeof BellSchool> = (
  args: BellSchoolPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <BellSchool {...args} />
    <BellSchool {...args} fill="red.500" />
    <BellSchool {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
