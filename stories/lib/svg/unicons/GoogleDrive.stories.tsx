import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { GoogleDrive, GoogleDrivePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GoogleDrive",
  component: GoogleDrive,
} as ComponentMeta<typeof GoogleDrive>;

const Template: ComponentStory<typeof GoogleDrive> = (
  args: GoogleDrivePropsI
) => (
  <Box display="flex" gap="20px">
    <GoogleDrive {...args} />
    <GoogleDrive {...args} fill="red.500" />
    <GoogleDrive {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
