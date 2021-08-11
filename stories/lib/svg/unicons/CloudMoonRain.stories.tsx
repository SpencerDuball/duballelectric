import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudMoonRain, CloudMoonRainPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMoonRain",
  component: CloudMoonRain,
} as ComponentMeta<typeof CloudMoonRain>;

const Template: ComponentStory<typeof CloudMoonRain> = (
  args: CloudMoonRainPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudMoonRain {...args} />
    <CloudMoonRain {...args} fill="red.500" />
    <CloudMoonRain {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
