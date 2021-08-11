import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FastMailAlt, FastMailAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FastMailAlt",
  component: FastMailAlt,
} as ComponentMeta<typeof FastMailAlt>;

const Template: ComponentStory<typeof FastMailAlt> = (
  args: FastMailAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <FastMailAlt {...args} />
    <FastMailAlt {...args} fill="red.500" />
    <FastMailAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
