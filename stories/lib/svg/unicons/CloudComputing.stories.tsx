import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudComputing, CloudComputingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudComputing",
  component: CloudComputing,
} as ComponentMeta<typeof CloudComputing>;

const Template: ComponentStory<typeof CloudComputing> = (
  args: CloudComputingPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudComputing {...args} />
    <CloudComputing {...args} fill="red.500" />
    <CloudComputing {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
