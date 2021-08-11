import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { CloudSunHail, CloudSunHailPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudSunHail",
  component: CloudSunHail,
} as ComponentMeta<typeof CloudSunHail>;

const Template: ComponentStory<typeof CloudSunHail> = (
  args: CloudSunHailPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <CloudSunHail {...args} />
    <CloudSunHail {...args} fill="red.500" />
    <CloudSunHail {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
