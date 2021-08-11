import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Signin, SigninPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Signin",
  component: Signin,
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = (args: SigninPropsI) => (
  <Box display="flex" gap="20px">
    <Signin {...args} />
    <Signin {...args} fill="red.500" />
    <Signin {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
