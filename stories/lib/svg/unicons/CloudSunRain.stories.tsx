import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSunRain, CloudSunRainPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunRain",
  component: CloudSunRain,
} as ComponentMeta<typeof CloudSunRain>;

const Template: ComponentStory<typeof CloudSunRain> = (
  args: CloudSunRainPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudSunRain {...args} />
    <CloudSunRain {...args} fill="red.500" />
    <CloudSunRain {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
