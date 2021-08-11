import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { AppleAlt, AppleAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AppleAlt",
  component: AppleAlt,
} as ComponentMeta<typeof AppleAlt>;

const Template: ComponentStory<typeof AppleAlt> = (args: AppleAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <AppleAlt {...args} />
    <AppleAlt {...args} fill="red.500" />
    <AppleAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
