import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GoogleHangouts, GoogleHangoutsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GoogleHangouts",
  component: GoogleHangouts,
} as ComponentMeta<typeof GoogleHangouts>;

const Template: ComponentStory<typeof GoogleHangouts> = (
  args: GoogleHangoutsPropsI
) => (
  <Box display="flex" gap="20px">
    <GoogleHangouts {...args} />
    <GoogleHangouts {...args} fill="red.500" />
    <GoogleHangouts {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
