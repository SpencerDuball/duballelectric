import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Copyright, CopyrightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Copyright",
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

const Template: ComponentStory<typeof Copyright> = (args: CopyrightPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Copyright {...args} />
    <Copyright {...args} fill="red.500" />
    <Copyright {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
