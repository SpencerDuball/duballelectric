import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CropAltRotateLeft, CropAltRotateLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CropAltRotateLeft",
  component: CropAltRotateLeft,
} as ComponentMeta<typeof CropAltRotateLeft>;

const Template: ComponentStory<typeof CropAltRotateLeft> = (
  args: CropAltRotateLeftPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CropAltRotateLeft {...args} />
    <CropAltRotateLeft {...args} fill="red.500" />
    <CropAltRotateLeft {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
