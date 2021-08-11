import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GooglePlay, GooglePlayPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GooglePlay",
  component: GooglePlay,
} as ComponentMeta<typeof GooglePlay>;

const Template: ComponentStory<typeof GooglePlay> = (
  args: GooglePlayPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <GooglePlay {...args} />
    <GooglePlay {...args} fill="red.500" />
    <GooglePlay {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
