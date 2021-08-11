import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { FlipHAlt, FlipHAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FlipHAlt",
  component: FlipHAlt,
} as ComponentMeta<typeof FlipHAlt>;

const Template: ComponentStory<typeof FlipHAlt> = (args: FlipHAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <FlipHAlt {...args} />
    <FlipHAlt {...args} fill="red.500" />
    <FlipHAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
