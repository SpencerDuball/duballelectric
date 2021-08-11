import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowLeft, ArrowLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowLeft",
  component: ArrowLeft,
} as ComponentMeta<typeof ArrowLeft>;

const Template: ComponentStory<typeof ArrowLeft> = (args: ArrowLeftPropsI) => (
  <Box display="flex" gap="20px">
    <ArrowLeft {...args} />
    <ArrowLeft {...args} fill="red.500" />
    <ArrowLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
