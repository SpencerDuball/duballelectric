import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CopyAlt, CopyAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CopyAlt",
  component: CopyAlt,
} as ComponentMeta<typeof CopyAlt>;

const Template: ComponentStory<typeof CopyAlt> = (args: CopyAltPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CopyAlt {...args} />
    <CopyAlt {...args} fill="red.500" />
    <CopyAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
