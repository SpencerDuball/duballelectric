import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TumblrAlt, TumblrAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TumblrAlt",
  component: TumblrAlt,
} as ComponentMeta<typeof TumblrAlt>;

const Template: ComponentStory<typeof TumblrAlt> = (args: TumblrAltPropsI) => (
  <Box display="flex" gap="20px">
    <TumblrAlt {...args} />
    <TumblrAlt {...args} fill="red.500" />
    <TumblrAlt {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
