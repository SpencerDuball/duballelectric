import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSunMeatball, CloudSunMeatballPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunMeatball",
  component: CloudSunMeatball,
} as ComponentMeta<typeof CloudSunMeatball>;

const Template: ComponentStory<typeof CloudSunMeatball> = (
  args: CloudSunMeatballPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudSunMeatball {...args} />
    <CloudSunMeatball {...args} fill="red.500" />
    <CloudSunMeatball {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
