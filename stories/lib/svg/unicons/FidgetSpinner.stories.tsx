import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FidgetSpinner, FidgetSpinnerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FidgetSpinner",
  component: FidgetSpinner,
} as ComponentMeta<typeof FidgetSpinner>;

const Template: ComponentStory<typeof FidgetSpinner> = (
  args: FidgetSpinnerPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FidgetSpinner {...args} />
    <FidgetSpinner {...args} fill="red.500" />
    <FidgetSpinner {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
