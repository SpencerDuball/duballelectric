import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { WindSun, WindSunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WindSun",
  component: WindSun,
} as ComponentMeta<typeof WindSun>;

const Template: ComponentStory<typeof WindSun> = (args: WindSunPropsI) => (
  <Box display="flex" gap="20px">
    <WindSun {...args} />
    <WindSun {...args} fill="red.500" />
    <WindSun {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
