import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSun, CloudSunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSun",
  component: CloudSun,
} as ComponentMeta<typeof CloudSun>;

const Template: ComponentStory<typeof CloudSun> = (args: CloudSunPropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudSun {...args} />
    <CloudSun {...args} fill="red.500" />
    <CloudSun {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
