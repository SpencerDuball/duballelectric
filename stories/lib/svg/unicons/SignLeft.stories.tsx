import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SignLeft, SignLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SignLeft",
  component: SignLeft,
} as ComponentMeta<typeof SignLeft>;

const Template: ComponentStory<typeof SignLeft> = (args: SignLeftPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <SignLeft {...args} />
    <SignLeft {...args} fill="red.500" />
    <SignLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
