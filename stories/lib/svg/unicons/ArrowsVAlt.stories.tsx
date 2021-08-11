import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ArrowsVAlt, ArrowsVAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsVAlt",
  component: ArrowsVAlt,
} as ComponentMeta<typeof ArrowsVAlt>;

const Template: ComponentStory<typeof ArrowsVAlt> = (
  args: ArrowsVAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <ArrowsVAlt {...args} />
    <ArrowsVAlt {...args} fill="red.500" />
    <ArrowsVAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
