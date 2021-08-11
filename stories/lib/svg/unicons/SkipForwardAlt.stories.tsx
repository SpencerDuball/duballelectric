import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SkipForwardAlt, SkipForwardAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SkipForwardAlt",
  component: SkipForwardAlt,
} as ComponentMeta<typeof SkipForwardAlt>;

const Template: ComponentStory<typeof SkipForwardAlt> = (
  args: SkipForwardAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <SkipForwardAlt {...args} />
    <SkipForwardAlt {...args} fill="red.500" />
    <SkipForwardAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
