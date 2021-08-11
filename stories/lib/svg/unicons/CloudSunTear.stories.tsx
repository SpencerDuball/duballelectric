import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSunTear, CloudSunTearPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunTear",
  component: CloudSunTear,
} as ComponentMeta<typeof CloudSunTear>;

const Template: ComponentStory<typeof CloudSunTear> = (
  args: CloudSunTearPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudSunTear {...args} />
    <CloudSunTear {...args} fill="red.500" />
    <CloudSunTear {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
