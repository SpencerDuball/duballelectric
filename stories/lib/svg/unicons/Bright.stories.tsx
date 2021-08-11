import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Bright, BrightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Bright",
  component: Bright,
} as ComponentMeta<typeof Bright>;

const Template: ComponentStory<typeof Bright> = (args: BrightPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Bright {...args} />
    <Bright {...args} fill="red.500" />
    <Bright {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
