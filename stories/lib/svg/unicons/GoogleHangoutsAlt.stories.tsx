import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GoogleHangoutsAlt, GoogleHangoutsAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GoogleHangoutsAlt",
  component: GoogleHangoutsAlt,
} as ComponentMeta<typeof GoogleHangoutsAlt>;

const Template: ComponentStory<typeof GoogleHangoutsAlt> = (
  args: GoogleHangoutsAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <GoogleHangoutsAlt {...args} />
    <GoogleHangoutsAlt {...args} fill="red.500" />
    <GoogleHangoutsAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
