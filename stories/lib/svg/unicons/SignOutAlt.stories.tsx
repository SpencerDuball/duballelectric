import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignOutAlt, SignOutAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignOutAlt",
  component: SignOutAlt,
} as ComponentMeta<typeof SignOutAlt>;

const Template: ComponentStory<typeof SignOutAlt> = (
  args: SignOutAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SignOutAlt {...args} />
    <SignOutAlt {...args} fill="red.500" />
    <SignOutAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
