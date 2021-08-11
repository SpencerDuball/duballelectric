import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Building, BuildingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Building",
  component: Building,
} as ComponentMeta<typeof Building>;

const Template: ComponentStory<typeof Building> = (args: BuildingPropsI) => (
  <Box display="flex" gap="20px">
    <Building {...args} />
    <Building {...args} fill="red.500" />
    <Building {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
