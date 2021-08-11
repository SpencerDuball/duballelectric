import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BusSchool, BusSchoolPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BusSchool",
  component: BusSchool,
} as ComponentMeta<typeof BusSchool>;

const Template: ComponentStory<typeof BusSchool> = (args: BusSchoolPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BusSchool {...args} />
    <BusSchool {...args} fill="red.500" />
    <BusSchool {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
