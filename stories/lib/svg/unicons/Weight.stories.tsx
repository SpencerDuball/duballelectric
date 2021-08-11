import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Weight, WeightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Weight",
  component: Weight,
} as ComponentMeta<typeof Weight>;

const Template: ComponentStory<typeof Weight> = (args: WeightPropsI) => (
  <Box display="flex" gap="20px">
    <Weight {...args} />
    <Weight {...args} fill="red.500" />
    <Weight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
