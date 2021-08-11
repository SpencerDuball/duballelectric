import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CropAltRotateRight, CropAltRotateRightPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CropAltRotateRight",
  component: CropAltRotateRight,
} as ComponentMeta<typeof CropAltRotateRight>;

const Template: ComponentStory<typeof CropAltRotateRight> = (
  args: CropAltRotateRightPropsI
) => (
  <Box display="flex" gap="20px">
    <CropAltRotateRight {...args} />
    <CropAltRotateRight {...args} fill="red.500" />
    <CropAltRotateRight {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
