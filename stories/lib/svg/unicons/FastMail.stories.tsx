import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FastMail, FastMailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FastMail",
  component: FastMail,
} as ComponentMeta<typeof FastMail>;

const Template: ComponentStory<typeof FastMail> = (args: FastMailPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FastMail {...args} />
    <FastMail {...args} fill="red.500" />
    <FastMail {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
