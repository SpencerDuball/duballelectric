import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignInAlt, SignInAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignInAlt",
  component: SignInAlt,
} as ComponentMeta<typeof SignInAlt>;

const Template: ComponentStory<typeof SignInAlt> = (args: SignInAltPropsI) => (
  <Box display="flex" gap="20px">
    <SignInAlt {...args} />
    <SignInAlt {...args} fill="red.500" />
    <SignInAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
