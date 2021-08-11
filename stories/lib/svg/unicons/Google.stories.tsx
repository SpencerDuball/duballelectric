import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Google, GooglePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Google",
  component: Google,
} as ComponentMeta<typeof Google>;

const Template: ComponentStory<typeof Google> = (args: GooglePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Google {...args} />
    <Google {...args} fill="red.500" />
    <Google {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
