import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { BrushAlt, BrushAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/BrushAlt",
  component: BrushAlt,
} as ComponentMeta<typeof BrushAlt>;

const Template: ComponentStory<typeof BrushAlt> = (args: BrushAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <BrushAlt {...args} />
    <BrushAlt {...args} fill="red.500" />
    <BrushAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
