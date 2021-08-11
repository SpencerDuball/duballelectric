import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExpandFromCorner, ExpandFromCornerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExpandFromCorner",
  component: ExpandFromCorner,
} as ComponentMeta<typeof ExpandFromCorner>;

const Template: ComponentStory<typeof ExpandFromCorner> = (
  args: ExpandFromCornerPropsI
) => (
  <Box display="flex" gap="20px">
    <ExpandFromCorner {...args} />
    <ExpandFromCorner {...args} fill="red.500" />
    <ExpandFromCorner {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
