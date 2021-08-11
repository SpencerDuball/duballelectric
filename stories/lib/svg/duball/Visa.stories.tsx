import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Visa, VisaPropsI } from "lib/svg/duball";

export default {
  title: "lib/svg/duball/Visa",
  component: Visa,
} as ComponentMeta<typeof Visa>;

const Template: ComponentStory<typeof Visa> = (args: VisaPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Visa {...args} />
    <Visa {...args} fill="red.500" />
    <Visa {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
