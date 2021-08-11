import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Sigma, SigmaPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Sigma",
  component: Sigma,
} as ComponentMeta<typeof Sigma>;

const Template: ComponentStory<typeof Sigma> = (args: SigmaPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Sigma {...args} />
    <Sigma {...args} fill="red.500" />
    <Sigma {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
