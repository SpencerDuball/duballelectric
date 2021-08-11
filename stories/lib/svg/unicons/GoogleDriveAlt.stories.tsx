import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GoogleDriveAlt, GoogleDriveAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GoogleDriveAlt",
  component: GoogleDriveAlt,
} as ComponentMeta<typeof GoogleDriveAlt>;

const Template: ComponentStory<typeof GoogleDriveAlt> = (
  args: GoogleDriveAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <GoogleDriveAlt {...args} />
    <GoogleDriveAlt {...args} fill="red.500" />
    <GoogleDriveAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
