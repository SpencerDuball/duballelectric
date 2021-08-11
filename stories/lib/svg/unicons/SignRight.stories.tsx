import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignRight, SignRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignRight",
  component: SignRight,
} as ComponentMeta<typeof SignRight>;

const Template: ComponentStory<typeof SignRight> = (args: SignRightPropsI) => (
  <Box display="flex" gap="20px">
    <SignRight {...args} />
    <SignRight {...args} fill="red.500" />
    <SignRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
