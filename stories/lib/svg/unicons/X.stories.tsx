import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { X, XPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/X",
  component: X,
} as ComponentMeta<typeof X>;

const Template: ComponentStory<typeof X> = (args: XPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <X {...args} />
    <X {...args} fill="red.500" />
    <X {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
