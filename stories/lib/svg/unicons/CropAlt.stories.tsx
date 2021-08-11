import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CropAlt, CropAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CropAlt",
  component: CropAlt,
} as ComponentMeta<typeof CropAlt>;

const Template: ComponentStory<typeof CropAlt> = (args: CropAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CropAlt {...args} />
    <CropAlt {...args} fill="red.500" />
    <CropAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
