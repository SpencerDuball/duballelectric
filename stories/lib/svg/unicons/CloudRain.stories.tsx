import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudRain, CloudRainPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudRain",
  component: CloudRain,
} as ComponentMeta<typeof CloudRain>;

const Template: ComponentStory<typeof CloudRain> = (args: CloudRainPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudRain {...args} />
    <CloudRain {...args} fill="red.500" />
    <CloudRain {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
