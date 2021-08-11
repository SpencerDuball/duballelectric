import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CornerDownRightAlt, CornerDownRightAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CornerDownRightAlt",
  component: CornerDownRightAlt,
} as ComponentMeta<typeof CornerDownRightAlt>;

const Template: ComponentStory<typeof CornerDownRightAlt> = (
  args: CornerDownRightAltPropsI
) => (
  <Box display="flex" gap="20px">
    <CornerDownRightAlt {...args} />
    <CornerDownRightAlt {...args} fill="red.500" />
    <CornerDownRightAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
