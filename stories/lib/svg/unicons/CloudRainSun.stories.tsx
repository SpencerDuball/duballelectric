import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudRainSun, CloudRainSunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudRainSun",
  component: CloudRainSun,
} as ComponentMeta<typeof CloudRainSun>;

const Template: ComponentStory<typeof CloudRainSun> = (
  args: CloudRainSunPropsI
) => (
  <Box display="flex" gap="20px">
    <CloudRainSun {...args} />
    <CloudRainSun {...args} fill="red.500" />
    <CloudRainSun {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
