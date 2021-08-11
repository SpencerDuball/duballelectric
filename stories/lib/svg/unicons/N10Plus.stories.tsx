import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { N10Plus, N10PlusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/N10Plus",
  component: N10Plus,
} as ComponentMeta<typeof N10Plus>;

const Template: ComponentStory<typeof N10Plus> = (args: N10PlusPropsI) => (
  <Box display="flex" gap="20px">
    <N10Plus {...args} />
    <N10Plus {...args} fill="red.500" />
    <N10Plus {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
