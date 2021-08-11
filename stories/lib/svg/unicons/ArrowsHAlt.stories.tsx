import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsHAlt, ArrowsHAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsHAlt",
  component: ArrowsHAlt,
} as ComponentMeta<typeof ArrowsHAlt>;

const Template: ComponentStory<typeof ArrowsHAlt> = (
  args: ArrowsHAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsHAlt {...args} />
    <ArrowsHAlt {...args} fill="red.500" />
    <ArrowsHAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
