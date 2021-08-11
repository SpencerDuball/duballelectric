import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Package, PackagePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Package",
  component: Package,
} as ComponentMeta<typeof Package>;

const Template: ComponentStory<typeof Package> = (args: PackagePropsI) => (
  <Box display="flex" gap="20px">
    <Package {...args} />
    <Package {...args} fill="red.500" />
    <Package {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
