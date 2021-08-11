import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TwitterAlt, TwitterAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TwitterAlt",
  component: TwitterAlt,
} as ComponentMeta<typeof TwitterAlt>;

const Template: ComponentStory<typeof TwitterAlt> = (
  args: TwitterAltPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TwitterAlt {...args} />
    <TwitterAlt {...args} fill="red.500" />
    <TwitterAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
